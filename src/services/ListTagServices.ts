import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";

class ListTagServices {
  async execute() {
    const tagsRepositories = getCustomRepository(TagRepositories);
    const tags = await tagsRepositories.find();
    return classToPlain(tags);
  }
}

export { ListTagServices };
