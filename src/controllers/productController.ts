import { Request, Response } from "express";
import api from "../config/axios";

export const getAllProducts = async (
  _req: Request,
  response: Response
): Promise<Response> => {
  try {
    const res = await api.get("/products");
    return response.status(200).json(res.data);
  } catch (error) {
    return response.status(500).json(error);
  }
};
