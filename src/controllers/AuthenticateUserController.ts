import { Request, Response } from "express";
import { AutenticateUserServices } from "../services/AuthenticateUserSevices";
class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateUserServices = new AutenticateUserServices();
    const token = await authenticateUserServices.execute({
      email,
      password,
    });

    return response.json({ token });
  }
}

export { AuthenticateUserController };
