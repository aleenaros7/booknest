import cors from "cors";
import express, { Request, Response, type Express } from "express";
import config from "config";
import { ResponseHelper } from "./utils/ResponseHelper";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  ResponseHelper.handleSuccess(res, "healthy");
});

export { app };
