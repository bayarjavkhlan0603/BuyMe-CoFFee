import { Request, Response } from "express";
import { prisma } from "../../../utils/prisma";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { secret_key } from "../../../utils/env";

export const signin = async (req: Request, res: Response) => {
  const { password, email } = req.body;

  // email dawtagdsan eshiig shalgah
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) return { message: "user not found" };

    const isMatch = compareSync(password, user.password);

    if (isMatch) return res.send({ message: "email or password wrong" });

    const token = jwt.sign(user, secret_key as any, { expiresIn: 3600 });
    res.send({
      success: true,
    });
    return res
      .cookie("token", token, {
        maxAge: 60 * 1000 * 10,
        secure: false,
      })
      .send();
  } catch (error) {
    return res.send(error);
  }
};
