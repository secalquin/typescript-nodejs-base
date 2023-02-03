import { Router } from "express";
import productRoutes from "./productRoutes";

const routes = Router();

routes.use("/product", productRoutes);

export default routes;
