import { useMutation } from "react-query";
import { client } from "./axios";
import { config } from "../config";

export const useLoginMutation = () => {
  const mutation = useMutation(
    async (
      data: {
        userName: string;
        password: string;
      }
    ) => {
      const path = config.api.auth.login

      const response = await client.post(path, { ...data });
      return response.data.accountId;
    }
  );

  return mutation;
};
