import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentServices {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepositories);
    const usersRepository = getCustomRepository(UserRepositories);

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver");
    }

    const userAlreadyExists = await usersRepository.findOne(user_receiver);

    if (!userAlreadyExists) {
      throw new Error("User Receiver does not Exists");
    }
    const compliment = complimentRepository.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await complimentRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentServices };
