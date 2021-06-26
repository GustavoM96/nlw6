import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
// import {} from
const router = Router();

const createUserController = new CreateUserController();
const createtagrController = new CreateTagController();
const createcomplimentrController = new CreateComplimentController();

const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);

router.post("/compliments", createcomplimentrController.handle);

router.post("/tags", ensureAdmin, createtagrController.handle);

router.post("/login", authenticateUserController.handle);

export { router };
