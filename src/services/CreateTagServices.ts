import { TagRepositories } from "../repositories/TagRepositories";
import { getCustomRepository } from "typeorm";

interface ITagRequest {
  name: string;
}

class CreateTagServices {
  async execute({ name }: ITagRequest) {
    const tagRepository = getCustomRepository(TagRepositories);

    if (!name) {
      throw new Error("Incorrect Name");
    }

    const tagAlreadyExists = await tagRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Tag already Exists");
    }
    const tag = tagRepository.create({
      name,
    });

    await tagRepository.save(tag);

    return tag;
  }
}

export { CreateTagServices };
