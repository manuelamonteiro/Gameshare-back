import { Router } from "express";
import { insertPurchase } from "../controllers/purchases.controller.js";
import { validatePurchase } from "../middlewares/purchase.middleware.js";

const router = Router();

router.post("/purchase", validatePurchase, insertPurchase);

export default router;
