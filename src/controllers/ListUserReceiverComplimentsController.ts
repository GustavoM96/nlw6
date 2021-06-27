import { Request, Response } from "express";
import { ListUserReceiveComplimentsServices } from "../services/ListUserReceiveComplimentsServices";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserReceiveComplimentsServices =
      new ListUserReceiveComplimentsServices();
    const compliments = await listUserReceiveComplimentsServices.execute(
      user_id
    );
    return response.json(compliments);
  }
}
export { ListUserReceiveComplimentsController };
