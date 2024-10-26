import { Role } from "../enums";

export type User = {
  userId: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  role: Role;
  token: string;
};
