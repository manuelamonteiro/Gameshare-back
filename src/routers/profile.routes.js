import { postAddress, nameChanged, passwordChanged } from "../controllers/profile.controller.js";
import { Router } from "express";
import { userChangedValidation, passwordChangedValidation, addressValidation } from "../middlewares/profile.middleware.js";

const router = Router();

router.post("/profile-name", userChangedValidation, nameChanged);
router.post("/profile-password", passwordChangedValidation, passwordChanged);
router.post("/profile-address", addressValidation, postAddress);


export default router;