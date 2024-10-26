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

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({
      $or: [{ userName }, { email: userName }],
    }).lean();

    if (!user) {
      return ResponseHelper.handleError(
        res,
        "User not found",
        {},
        StatusCodes.NOT_FOUND
      );
    }

    if (!(await PasswordUtil.verifyPassword(password, user.password))) {
      return ResponseHelper.handleError(
        res,
        "Invalid credentials",
        {},
        StatusCodes.UNAUTHORIZED
      );
    }

    const token = TokenUtil.generateToken(user);

    ResponseHelper.handleSuccess(
      res,
      "Login successful",
      {
        user: { ...user, token },
      },
      StatusCodes.OK,
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Login failed");
  }
};
