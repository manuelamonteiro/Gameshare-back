import { postSingIn, postSingUp } from "../controllers/users.controller.js";
import {Router} from "express";
import { userSignUp } from "../middlewares/userSignUp.middleware.js";
import { userSignIn } from "../middlewares/userSignIn.middleware.js";

const router = Router();

router.post("/sign-up", userSignUp, postSingUp);

router.post("/", userSignIn, postSingIn);

export default router;