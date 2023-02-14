import  express from "express";
const router=express.Router();
import * as CategoryController from '../controller/category.controller.js';

router.post("/save",CategoryController.save);

router.get("/fetch",CategoryController.fetch);

router.delete("/delete/:id",CategoryController.deleteCategory);

router.patch("/update",CategoryController.update);
export default router;