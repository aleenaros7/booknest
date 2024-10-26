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