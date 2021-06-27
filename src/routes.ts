import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";
// import {} from
const router = Router();

const createUserController = new CreateUserController();
const createtagrController = new CreateTagController();
const createcomplimentrController = new CreateComplimentController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();

const listUserSenderComplimentsController =
  new ListUserSenderComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();

const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);

router.post("/login", authenticateUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createtagrController.handle
);
router.get("/tags", ensureAuthenticated, listTagController.handle);

router.post(
  "/compliments",
  ensureAuthenticated,
  createcomplimentrController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSenderComplimentsController.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

export { router };
