import { z } from "zod";

export const signUpUserSchema = z.object({
  body: z.object({
    fullName: z
      .string({ required_error: "fullName is required" })
      .trim()
      .min(3, { message: "Name must be at least 3 characters" })
      .max(100, { message: "Name must be at most 100 characters" }),
    userName: z
      .string({ required_error: "userName is required" })
      .trim()
      .min(3, { message: "userName must be at least 3 characters" })
      .max(30, { message: "userName must be at most 100 characters" }),
    email: z
      .string({ required_error: "email is required" })
      .trim()
      .email({ message: "Invalid email address" })
      .min(3, { message: "email must be at least 3 characters" })
      .max(100, { message: "email must be at most 100 characters" }),
    password: z
      .string({ required_error: "password is required" })
      .min(8, { message: "password must be at least 8 characters" })
      .max(100, { message: "password must be at most 100 characters" }),
  }),
});

export const signInUserSchema = z.object({
  body: z.object({
    userName: z
      .string({ required_error: "userName is required" })
      .trim()
      .min(3, { message: "userName must be at least 3 characters" })
      .max(30, { message: "userName must be at most 100 characters" }),
    password: z
      .string({ required_error: "password is required" })
      .min(8, { message: "password must be at least 8 characters" })
      .max(100, { message: "password must be at most 100 characters" }),
  }),
});

export const createBookSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "title is required" })
      .trim()
      .min(1, { message: "Title must be at least 1 character" })
      .max(200, { message: "Title must be at most 200 characters" }),
    author: z
      .string({ required_error: "author is required" })
      .trim()
      .min(1, { message: "Author must be at least 1 character" })
      .max(100, { message: "Author must be at most 100 characters" }),
    description: z
      .string({ required_error: "description is required" })
      .trim()
      .min(1, { message: "Description must be at least 1 character" })
      .max(1000, { message: "Description must be at most 1000 characters" }),
    logo: z
      .string({ required_error: "logo is required" })
      .url({ message: "Invalid logo URL" }),
    genre: z
      .string({ required_error: "genre is required" })
      .trim()
      .min(1, { message: "Genre must be at least 1 character" })
      .max(50, { message: "Genre must be at most 50 characters" }),
    totalCopies: z
      .number({ required_error: "totalCopies is required" })
      .min(0, { message: "Total copies must be at least 0" }),
  }),
});

export const bulkCreateBooksSchema = z.object({
  body: z.array(
    z.object({
      title: z
        .string({ required_error: "title is required" })
        .trim()
        .min(1, { message: "Title must be at least 1 character" })
        .max(200, { message: "Title must be at most 200 characters" }),
      author: z
        .string({ required_error: "author is required" })
        .trim()
        .min(1, { message: "Author must be at least 1 character" })
        .max(100, { message: "Author must be at most 100 characters" }),
      description: z
        .string({ required_error: "description is required" })
        .trim()
        .min(1, { message: "Description must be at least 1 character" })
        .max(1000, {
          message: "Description must be at most 1000 characters",
        }),
      logo: z
        .string({ required_error: "logo is required" })
        .url({ message: "Invalid logo URL" }),
      genre: z
        .string({ required_error: "genre is required" })
        .trim()
        .min(1, { message: "Genre must be at least 1 character" })
        .max(50, { message: "Genre must be at most 50 characters" }),
      totalCopies: z
        .number({ required_error: "totalCopies is required" })
        .min(0, { message: "Total copies must be at least 0" }),
    })
  ),
});

export const borrowRequestSchema = z.object({
  params: z.object({
    bookId: z.string({ required_error: "bookId is required" }),
  }),
});

export const updateBookSchema = z.object({
  params: z.object({
    bookId: z.string({ required_error: "bookId is required" }),
  }),
  body: z.object({
    title: z
      .string({ required_error: "title is required" })
      .trim()
      .min(1, { message: "Title must be at least 1 character" })
      .max(200, { message: "Title must be at most 200 characters" }),
    author: z
      .string({ required_error: "author is required" })
      .trim()
      .min(1, { message: "Author must be at least 1 character" })
      .max(100, { message: "Author must be at most 100 characters" }),
    description: z
      .string({ required_error: "description is required" })
      .trim()
      .min(1, { message: "Description must be at least 1 character" })
      .max(1000, { message: "Description must be at most 1000 characters" }),
    logo: z
      .string({ required_error: "logo is required" })
      .url({ message: "Invalid logo URL" }),
    genre: z
      .string({ required_error: "genre is required" })
      .trim()
      .min(1, { message: "Genre must be at least 1 character" })
      .max(50, { message: "Genre must be at most 50 characters" }),
    totalCopies: z
      .number({ required_error: "totalCopies is required" })
      .min(0, { message: "Total copies must be at least 0" }),
  }),
});
