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
      totalCopies,
    });

    ResponseHelper.handleSuccess(
      res,
      "Book successfully created",
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
      StatusCodes.CREATED
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Creating books failed");
  }
};
