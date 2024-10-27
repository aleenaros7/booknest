import express, { type Router } from "express";
import { validateRequest } from "app/middlewares/validator";
import {
  borrowRequestSchema,
  bulkCreateBooksSchema,
  createBookSchema,
} from "app/schemas";
import {
  bulkCreateBooks,
  createBook,
  fetchBooks,
} from "app/controllers/bookController";
import { verifyToken } from "app/middlewares/verifyToken";
import { verifyLibrarian } from "app/middlewares/verifyLibrarian";
import {
  fetchBorrowingInformation,
  requestBook,
} from "app/controllers/borrowController";

const bookRouter: Router = express.Router();

bookRouter.post(
  "/",
  verifyToken,
  verifyLibrarian,
  validateRequest(createBookSchema),
  createBook
);

bookRouter.post(
  "/bulk-create",
  verifyToken,
  verifyLibrarian,
  validateRequest(bulkCreateBooksSchema),
  bulkCreateBooks
);

bookRouter.get("/", verifyToken, fetchBooks);

bookRouter.post(
  "/:bookId/borrow-request",
  verifyToken,
  validateRequest(borrowRequestSchema),
  requestBook
);

bookRouter.get("/borrow-info", verifyToken, fetchBorrowingInformation);

export { bookRouter };
