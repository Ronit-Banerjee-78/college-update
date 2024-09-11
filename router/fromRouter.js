import express from "express";
import { registerController } from "../fromController.js";

const router = express.Router();

router.post('/register', registerController)
export default router;
