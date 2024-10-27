import express, { type Router } from "express";
import { validateRequest } from "app/middlewares/validator";
import { bulkCreateBooksSchema, createBookSchema } from "app/schemas";
import { bulkCreateBooks, createBook } from "app/controllers/bookController";
import { verifyToken } from "app/middlewares/verifyToken";
import { verifyLibrarian } from "app/middlewares/verifyLibrarian";

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

export { bookRouter };
