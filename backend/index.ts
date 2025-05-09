import express, { json } from "express";
import { userRouter } from "./src/routers/user";

const app = express();
app.use(json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8080, () => {
  console.log("server running at http://localhost:8000");
});
