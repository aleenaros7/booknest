import { useMutation } from "react-query";
import { client } from "./axios";
import { config } from "../config";
import { AxiosError } from "axios";
import { ApiResponse, User } from "../types";

export const useSignInMutation = () => {
  const mutation = useMutation<
    User,
    AxiosError<ApiResponse<any>>,
    { userName: string; password: string },
    unknown
  >(async (data: { userName: string; password: string }): Promise<User> => {
    const path = config.api.auth.signIn;

    const response = await client.post<ApiResponse<{ user: User }>>(
      path,
      {
        ...data,
      },
      {
        headers: {
          Authorization: false,
        },
      }
    );
    return response.data.data.user;
  });

  return mutation;
};

export const useSignUpMutation = () => {
  const mutation = useMutation<
    User,
    AxiosError<ApiResponse<any>>,
    { userName: string; password: string; fullName: string; email: string },
    unknown
  >(
    async (data: {
      userName: string;
      password: string;
      fullName: string;
      email: string;
    }): Promise<any> => {
      const path = config.api.auth.signUp;

      const response = await client.post(
        path,
        {
          ...data,
        },
        {
          headers: {
            Authorization: false,
          },
        }
      );
      return response.data;
    }
  );

  return mutation;
};
