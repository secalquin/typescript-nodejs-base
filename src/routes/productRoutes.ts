import { Router } from "express";
import { getAllProducts } from "../controllers/productController";

const router = Router();

router.get("/allProducts", getAllProducts);

export default router;
