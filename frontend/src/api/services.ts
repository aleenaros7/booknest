import { useMutation, useQuery } from "react-query";
import { client } from "./axios";
import { config } from "../config";
import { AxiosError } from "axios";
import { ApiResponse, Book, BorrowInfo, QueryOptions, User } from "../types";
import { DEFAULT_QUERY_OPTIONS } from "../constants";

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

export const useFetchBooksQuery = (queryOptions?: QueryOptions<string>) => {
  const fetchBooks = async (): Promise<Book[]> => {
    const path = config.api.books.fetchBooks;

    const response = await client.get<ApiResponse<{ books: Book[] }>>(path);

    return response.data.data.books;
  };

  return useQuery(["fetchBooks"], fetchBooks, {
    ...queryOptions,
    ...DEFAULT_QUERY_OPTIONS,
  });
};

export const useFetchBorrowInfoQuery = (
  queryOptions?: QueryOptions<string>
) => {
  const fetchBorrowInfo = async (): Promise<BorrowInfo[]> => {
    const path = config.api.books.fetchBorrowInfo;

    const response = await client.get<ApiResponse<{ borrowInfo: BorrowInfo[] }>>(path);

    return response.data.data.borrowInfo;
  };

  return useQuery(["fetchBorrowInfo"], fetchBorrowInfo, {
    ...queryOptions,
    ...DEFAULT_QUERY_OPTIONS,
  });
};
