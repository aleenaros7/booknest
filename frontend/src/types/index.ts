import { UseQueryOptions } from "react-query";
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

export type QueryOptions<TData> =
  | Omit<
      UseQueryOptions<TData, unknown, TData, unknown[]>,
      "queryKey" | "queryFn"
    >
  | undefined;

export type ToastOptions = {
  message: string;
  severity?: "error" | "info" | "warning" | "success";
  open: boolean;
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  statusCode: number;
};

export type Menu = { label: string; icon: JSX.Element };
