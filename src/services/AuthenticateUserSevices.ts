import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
interface IAutenticateUserServices {
  email: string;
  password: string;
}

class AutenticateUserServices {
  async execute({ email, password }: IAutenticateUserServices) {
    const userRepositories = getCustomRepository(UserRepositories);

    const user = await userRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      "91aaf9220053708e2cb9ce2cf95132c9",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AutenticateUserServices };
