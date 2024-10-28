import express, { type Router } from "express";
import { validateRequest } from "app/middlewares/validator";
import {
  borrowRequestSchema,
  bulkCreateBooksSchema,
  createBookSchema,
  updateBookSchema,
} from "app/schemas";
import {
  bulkCreateBooks,
  createBook,
  deleteBook,
  fetchBooks,
  updateBook,
} from "app/controllers/bookController";
import { verifyToken } from "app/middlewares/verifyToken";
import { verifyLibrarian } from "app/middlewares/verifyLibrarian";
import {
  fetchBorrowRequestCodes,
  fetchBorrowedBookCodes,
  fetchBorrowingHistory,
  fetchBorrowingInformation,
  issueBook,
  requestBook,
  returnBook,
} from "app/controllers/borrowController";

const bookRouter: Router = express.Router();

bookRouter.post(
  "/",
  verifyToken,
  verifyLibrarian,
  validateRequest(createBookSchema),
  createBook
);

bookRouter.put(
  "/:bookId",
  verifyToken,
  verifyLibrarian,
  validateRequest(updateBookSchema),
  updateBook
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
bookRouter.get("/borrow-history", verifyToken, fetchBorrowingHistory);
bookRouter.get("/codes", verifyToken, verifyLibrarian, fetchBorrowRequestCodes);
bookRouter.get(
  "/borrowed-codes",
  verifyToken,
  verifyLibrarian,
  fetchBorrowedBookCodes
);
bookRouter.post(
  "/borrowings/:borrowingId/issue-book",
  verifyToken,
  verifyLibrarian,
  issueBook
);
bookRouter.post(
  "/borrowings/:borrowingId/return-book",
  verifyToken,
  verifyLibrarian,
  returnBook
);
bookRouter.delete("/:bookId", verifyToken, verifyLibrarian, deleteBook);

export { bookRouter };
