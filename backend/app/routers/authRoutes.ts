import express, { type Router } from "express";
import { validateRequest } from "app/middlewares/validator";
import { loginUserSchema, registerUserSchema } from "app/schema";
import { loginUser, registerUser } from "app/controllers/authController";

const authRouter: Router = express.Router();

authRouter.post("/signup", validateRequest(registerUserSchema), registerUser);
authRouter.post("/login", validateRequest(loginUserSchema), loginUser);

export { authRouter };
