import express, { type Router } from "express";
import { verifyToken } from "app/middlewares/verifyToken.js";
import { validateRequest } from "app/middlewares/validator";
import { registerUserSchema } from "app/schema";
import { registerUser } from "app/controllers/authController";
import { registerLibrarian } from "app/controllers/librarianController";

const librarianRouter: Router = express.Router();

librarianRouter.post(
  "/",
  validateRequest(registerUserSchema),
  registerLibrarian
);

export { librarianRouter };
