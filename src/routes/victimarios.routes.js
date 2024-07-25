import { Router } from "express";
import {
getVictimarios, createVictimario,
} from "../controllers/victimarios.controller.js";

const router = Router();

// Routes
router.post("/", createVictimario);
router.get("/", getVictimarios);

export default router;
