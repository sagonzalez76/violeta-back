import express from "express";
import morgan from "morgan";

import cors from 'cors';

const app = express();



// Aplicar la configuración de CORS a todas las rutas
app.use(cors());


// Import routes
import incidenteRoutes from "./routes/incidente.routes.js";
import victimaRoutes from "./routes/victimas.routes.js";
import victimarioRoutes from "./routes/victimarios.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/incidencias", incidenteRoutes);
app.use("/api/victimas", victimaRoutes);
app.use("/api/victimarios", victimarioRoutes);

export default app;
