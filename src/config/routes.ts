import { Router } from "express";
import productRoutes from "../routes/productRoutes";

const routes = Router();

routes.use("/product", productRoutes);

export default routes;
