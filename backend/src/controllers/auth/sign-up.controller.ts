import { Request, Response } from "express";
import { prisma } from "../../../utils/prisma";
import bcrypt from "bcrypt";

// username dawtagdahgvi bhiig shalgah
const chekUser = async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { name: username },
    });
    if (user) {
      return res.send({ message: "The username is already taken" });
    }
    return res.send({ message: "Username available" });
  } catch (error) {}
};

//signUp bvrtgvvleh pass hash hiih
export const signUp = async (req: Request, res: Response) => {
  const { password, name, email } = req.body;
  const hashedPass = bcrypt.hashSync(password, 10);

  try {
    const response = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPass,
      },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
