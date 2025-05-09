import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { password, name, email } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);

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

export const findUsers = async (_: never, res: Response) => {
  try {
    const response = await prisma.user.findMany();
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const uptadeUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { password, name, email } = req.body;
  try {
    const response = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, password, name },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};
