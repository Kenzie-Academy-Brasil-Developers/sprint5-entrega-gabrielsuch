import { Router } from "express";


import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";


import getUsersController from "../controllers/user/getUsers.controller";
import getUserByIdController from "../controllers/user/getUserById.controller";
import createUserController from "../controllers/user/createUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";

const route = Router()


route.get("", getUsersController)
route.get("/:id", getUserByIdController)
route.post("", verifyEmailExistsMiddleware, createUserController)
route.patch("/:id", verifyEmailExistsMiddleware, updateUserController)
route.delete("/:id", deleteUserController)


export default route