import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().trim().min(1, "username is required"),
    password: z
      .string()
      .trim()
      .min(1, "password is required")
      .min(6, "password must be at least 6 characters"),
  });