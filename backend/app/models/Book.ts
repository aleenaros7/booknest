import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

export interface IBook {
  bookId: string;
  title: string;
  author: string;
  genre: string;
  publishedYear?: number;
  availableCopies: number;
  totalCopies: number;
}

const BookSchema = new Schema<IBook>(
  {
    bookId: {
      type: String,
      unique: true,
      default: () => uuidv4(),
    },
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publishedYear: { type: Number },
    availableCopies: { type: Number, default: 1 },
    totalCopies: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Book = mongoose.model<IBook>("Book", BookSchema);
