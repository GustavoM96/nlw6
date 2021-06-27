import { Request, Response } from "express";
import { CreateComplimentServices } from "../services/CreateComplimentServices";
class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;
    const { user_id } = request;
    const createcomplimentsServices = new CreateComplimentServices();

    const compliment = await createcomplimentsServices.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
