import { Router } from "express";
import {
    // createIncidente, 
    getIncidentes
} from "../controllers/incidente.controller.js";
import { createIncidente } from "../controllers/incidente.controller.js";

const router = Router();

// Routes
// router.post("/", createIncidente);
router.get("/", getIncidentes);


// router.get("/:id/tasks", getProjectTasks);

export default router;
