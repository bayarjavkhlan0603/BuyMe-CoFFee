import { Router } from "express";
import { signin } from "../controllers/auth/sign-in.controller";

export const authRouter = Router();

authRouter.post("/", signin as any);
