import express, { type Router } from "express";
import { validateRequest } from "app/middlewares/validator";
import { signInUserSchema, signUpUserSchema } from "app/schema";
import { signInUser, signUpUser } from "app/controllers/authController";

const authRouter: Router = express.Router();

authRouter.post("/sign-up", validateRequest(signUpUserSchema), signUpUser);
authRouter.post("/sign-in", validateRequest(signInUserSchema), signInUser);

export { authRouter };
