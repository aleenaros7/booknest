import { ResponseHelper } from "app/utils/ResponseHelper.js";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { Book } from "app/models/Book";

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, description, logo, genre, totalCopies } = req.body;
    const book = await Book.create({
      title,
      author,
      description,
      logo,
      genre,
      totalCopies: totalCopies > 0 ? totalCopies : 1,
    });

    ResponseHelper.handleSuccess(
      res,
      "Book successfully created",
      undefined,
      StatusCodes.CREATED
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Creating book failed");
  }
};

export const bulkCreateBooks = async (req: Request, res: Response) => {
  try {
    const books = req.body;
    const book = await Book.insertMany(books);

    ResponseHelper.handleSuccess(
      res,
      "Books successfully created",
      undefined,
      StatusCodes.CREATED
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Creating books failed");
  }
};

export const fetchBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).lean();

    ResponseHelper.handleSuccess(
      res,
      "Books successfully fetched",
      { books },
      StatusCodes.OK
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Fetching books failed");
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { title, author, description, logo, genre, totalCopies } = req.body;
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

    await Book.findOneAndUpdate(
      {
        bookId: bookId,
      },
      {
        title,
        author,
        description,
        logo,
        genre,
        totalCopies: totalCopies > 0 ? totalCopies : 1,
      }
    );

    ResponseHelper.handleSuccess(
      res,
      "Book successfully updated",
      undefined,
      StatusCodes.CREATED
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Updating book failed");
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
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

    await Book.deleteOne({
      bookId: bookId,
    });

    ResponseHelper.handleSuccess(
      res,
      "Book successfully deleted",
      undefined,
      StatusCodes.CREATED
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Deleting book failed");
  }
};
