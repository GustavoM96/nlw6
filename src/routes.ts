import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
const router = Router();

const createUserController = new CreateUserController();
const createtagrController = new CreateTagController();

router.post("/users", createUserController.handle);

router.post("/tags", ensureAdmin, createtagrController.handle);

export { router };
