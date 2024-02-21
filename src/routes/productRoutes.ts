import { getAllProducts } from "@controllers/productController";
import { Router } from "express";

const router = Router();

router.get("/allProducts", getAllProducts);

export default router;
