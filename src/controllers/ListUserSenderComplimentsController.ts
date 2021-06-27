import { Request, Response } from "express";
import { ListUserSenderComplimentsServices } from "../services/ListUserSenderComplimentsServices";

class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSenderComplimentsServices =
      new ListUserSenderComplimentsServices();
    const compliments = await listUserSenderComplimentsServices.execute(
      user_id
    );
    return response.json(compliments);
  }
}

export { ListUserSenderComplimentsController };
