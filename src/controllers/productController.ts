import { Request, Response } from "express";
import escuelaInstance from "@api/escuelaInstance";

export const getAllProducts = async (
  _req: Request,
  response: Response
): Promise<Response> => {
  try {
    const res = await escuelaInstance.get("/products");
    return response.status(200).json(res.data);
  } catch (error) {
    return response.status(500).json(error);
  }
};
