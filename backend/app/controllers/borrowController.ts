import { ResponseHelper } from "app/utils/ResponseHelper.js";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { Book, IBook } from "app/models/Book";
import { IUser } from "app/models/User";
import { Borrowing } from "app/models/Borrowing";
import { BorrowingStatus } from "app/enums";
import { DateUtil } from "app/utils/DateUtil";
import config from "config";

export const requestBook = async (req: Request, res: Response) => {
  try {
    const user: IUser = res.locals.user;
    const { bookId } = req.params;
    const book = await Book.findOne({ bookId }).lean();

    if (!book) {
      return ResponseHelper.handleError(
        res,
        "Book not found",
        undefined,
        StatusCodes.NOT_FOUND
      );
    }

    if (book.totalCopies === 0) {
      return ResponseHelper.handleError(
        res,
        "No more copies",
        undefined,
        StatusCodes.CONFLICT
      );
    }

    const borrowing = await Borrowing.create({
      userId: user.userId,
      bookId: book.bookId,
    });

    await Book.updateOne({ bookId }, { totalCopies: book.totalCopies - 1 });

    ResponseHelper.handleSuccess(
      res,
      "Request made successfully",
      undefined,
      StatusCodes.CREATED
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Requesting book failed");
  }
};

export const fetchBorrowingInformation = async (
  req: Request,
  res: Response
) => {
  try {
    const user: IUser = res.locals.user;
    const books = await Book.find().lean();
    let borrowings = await Borrowing.find({
      userId: user.userId,
      status: { $ne: BorrowingStatus.RETURNED },
    }).lean();

    borrowings = borrowings.map((item) => {
      return {
        ...item,
        bookInfo: books.find((e) => e.bookId === item.bookId),
      };
    });

    ResponseHelper.handleSuccess(
      res,
      "Borrowing information fetched successfully",
      {
        borrowInfo: borrowings,
      },
      StatusCodes.OK
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(
      res,
      "Failed to fetch borrowing information"
    );
  }
};

export const fetchBorrowingHistory = async (req: Request, res: Response) => {
  try {
    const user: IUser = res.locals.user;
    const books = await Book.find().lean();
    let borrowings = await Borrowing.find({
      userId: user.userId,
    })
      .sort({ createdAt: -1 })
      .lean();

    borrowings = borrowings.map((item) => {
      return {
        ...item,
        bookInfo: books.find((e) => e.bookId === item.bookId),
      };
    });

    ResponseHelper.handleSuccess(
      res,
      "History fetched successfully",
      {
        borrowHistory: borrowings,
      },
      StatusCodes.OK
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Failed to fetch History");
  }
};

export const fetchBorrowRequestCodes = async (req: Request, res: Response) => {
  try {
    let borrowings = await Borrowing.find(
      {
        status: BorrowingStatus.REQUESTED,
      },
      { borrowingId: true }
    ).lean();

    ResponseHelper.handleSuccess(
      res,
      "Borrow request codes fetched successfully",
      {
        codes: borrowings.map((e) => e.borrowingId),
      },
      StatusCodes.OK
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(
      res,
      "Failed to fetch borrow request codes"
    );
  }
};

export const fetchBorrowedBookCodes = async (req: Request, res: Response) => {
  try {
    let borrowings = await Borrowing.find(
      {
        status: BorrowingStatus.BORROWED,
      },
      { borrowingId: true }
    ).lean();

    ResponseHelper.handleSuccess(
      res,
      "Borrowed book codes fetched successfully",
      {
        codes: borrowings.map((e) => e.borrowingId),
      },
      StatusCodes.OK
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(
      res,
      "Failed to fetch borrowed book codes"
    );
  }
};

export const issueBook = async (req: Request, res: Response) => {
  try {
    const { borrowingId } = req.params;
    const borrowing = await Borrowing.findOne({ borrowingId }).lean();

    if (!borrowing) {
      return ResponseHelper.handleError(
        res,
        "Borrowing request not found",
        undefined,
        StatusCodes.NOT_FOUND
      );
    }

    await Borrowing.findOneAndUpdate(
      { borrowingId: borrowing.borrowingId },
      {
        issuedDate: DateUtil.today(),
        dueDate: DateUtil.afterDays(
          config.get<number>("borrowing.dueInDays") || 15
        ),
        status: BorrowingStatus.BORROWED,
      }
    );

    ResponseHelper.handleSuccess(
      res,
      "Book issued successfully",
      undefined,
      StatusCodes.OK
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Failed to issue book");
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { borrowingId } = req.params;
    const borrowing = await Borrowing.findOne({ borrowingId }).lean();

    if (!borrowing) {
      return ResponseHelper.handleError(
        res,
        "Borrowing info not found",
        undefined,
        StatusCodes.NOT_FOUND
      );
    }

    await Borrowing.findOneAndUpdate(
      { borrowingId: borrowing.borrowingId },
      {
        status: BorrowingStatus.RETURNED,
        returnedDate: DateUtil.today(),
      }
    );

    await Book.findOneAndUpdate(
      {
        bookId: borrowing.bookId,
      },
      { $inc: { totalCopies: 1 } }
    );

    ResponseHelper.handleSuccess(
      res,
      "Book returned successfully",
      undefined,
      StatusCodes.OK
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Failed to return book");
  }
};
