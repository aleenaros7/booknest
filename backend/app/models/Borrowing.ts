import { BorrowingStatus } from "app/enums";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

export interface IBorrowing {
  borrowingId: string;
  userId: string;
  bookId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: BorrowingStatus;
}

const BorrowingSchema = new Schema<IBorrowing>(
  {
    borrowingId: {
      type: String,
      unique: true,
      default: () => uuidv4(),
    },
    userId: { type: String, required: true },
    bookId: { type: String, required: true },
    borrowDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    returnDate: { type: Date },
    status: {
      type: String,
      default: BorrowingStatus.BORROWED,
    },
  },
  { timestamps: true }
);

export const Borrowing = mongoose.model<IBorrowing>(
  "Borrowing",
  BorrowingSchema
);
