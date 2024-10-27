import express, { type Router } from "express";
import { verifyToken } from "app/middlewares/verifyToken.js";
import { validateRequest } from "app/middlewares/validator";
import { signUpUserSchema } from "app/schemas";
import { signUpUser } from "app/controllers/authController";
import { registerLibrarian } from "app/controllers/librarianController";

const librarianRouter: Router = express.Router();

librarianRouter.post(
  "/",
  validateRequest(signUpUserSchema),
  registerLibrarian
);

export { librarianRouter };
