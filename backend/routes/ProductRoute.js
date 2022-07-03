import express from "express";
import {
  getProducts,
  getProductById,
  SaveProduct,
  UpdateProduct,
  DeleteProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", SaveProduct);
router.patch("/products/:id", UpdateProduct);
router.delete("/products/:id", DeleteProduct);

export default router;
