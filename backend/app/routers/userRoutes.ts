import express, { type Router } from "express";
import { ResponseHelper } from "app/utils/ResponseHelper.js";
import { verifyToken } from "app/middlewares/verifyToken.js";

const userRouter: Router = express.Router();

userRouter.get("/", verifyToken, (req: any, res: any) => {
  return ResponseHelper.handleSuccess(res, "succ");
});

export { userRouter };
