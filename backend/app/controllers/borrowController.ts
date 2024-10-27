import { ResponseHelper } from "app/utils/ResponseHelper.js";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { Book, IBook } from "app/models/Book";
import { IUser } from "app/models/User";
import { Borrowing } from "app/models/Borrowing";

export const requestBook = async (req: Request, res: Response) => {
  try {
    const user: IUser = res.locals.user;
    const { bookId } = req.params;
    const book = await Book.findOne({ bookId }).lean();

    console.log(book);

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
