import { Router } from "express";
import {
  createUser,
  deleteUserById,
  findUsers,
  uptadeUserById,
} from "../controllers/user";

export const userRouter = Router();

userRouter
  .post("/", createUser as any)
  .get("/", findUsers as any)
  .put("/:id", uptadeUserById as any)
  .delete("/", deleteUserById as any);
