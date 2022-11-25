import { Router } from "express";
import { insertProduct, getAllProducts, getProductById } from "../controllers/products.controller.js";

const router = Router();

router.post("/products", insertProduct);

router.get("/products", getAllProducts);

router.get("/product", getProductById);

export default router;
