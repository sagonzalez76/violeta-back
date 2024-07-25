import { Router } from "express";
import {
  getVictimas,
  createVictima,

} from "../controllers/victima.controller.js";

const router = Router();

// Routes
router.post("/", createVictima);
router.get("/", getVictimas);

export default router;
