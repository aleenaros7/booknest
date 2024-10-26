import { ResponseHelper } from "app/utils/ResponseHelper.js";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { User } from "app/models/User.js";
import { Role } from "app/enums";

export const registerLibrarian = async (req: Request, res: Response) => {
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
      role: Role.LIBRARIAN,
    });

    ResponseHelper.handleSuccess(
      res,
      "Librarian successfully registered",
      StatusCodes.CREATED
    );
  } catch (error) {
    console.log(error);
    return ResponseHelper.handleError(res, "Creating librarian failed");
  }
};
