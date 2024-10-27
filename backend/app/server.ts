import cors from "cors";
import express, { Request, Response, type Express } from "express";
import { ResponseHelper } from "./utils/ResponseHelper";
import { userRouter } from "./routers/userRoutes";
import { authRouter } from "./routers/authRoutes";
import { librarianRouter } from "./routers/librarianRoutes";
import { bookRouter } from "./routers/bookRoutes";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  ResponseHelper.handleSuccess(res, "healthy");
});

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/librarian", librarianRouter);

export { app };
