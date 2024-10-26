import { ResponseHelper } from "app/utils/ResponseHelper.js";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { User } from "app/models/User.js";
import { PasswordUtil } from "app/utils/PasswordUtil";
import { tokenOptions, TokenUtil } from "app/utils/TokenUtil";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { fullName, userName, email, password } = req.body;
    const isExistingUser = await User.findOne({
      $or: [{ userName }, { email }],
    });

    if (isExistingUser) {
      return ResponseHelper.handleError(
        res,
        "Already exists",
        {},
        StatusCodes.CONFLICT
      );
    }

    const user = await User.create({
      fullName,
      userName: userName.toLowerCase(),
      email,
      password,
    });

    ResponseHelper.handleSuccess(
      res,
      "User successfully registered",
      StatusCodes.CREATED
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Creating user failed");
  }
};
