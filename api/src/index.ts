import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";
import taskRoutes from "./routes/tasks.routes";

dotenv.config(); // Configuración de variables de entorno

const app = express(); // Inicialización de la aplicación

// Middlewares
app.use(cors({ origin: "http://localhost:3000" })); // Configuración CORS
app.use(express.json()); // Middleware para manejar JSON

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// Conexión a MongoDB
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/todo-app");
    console.log("Conexión exitosa a la base de datos");

    app.listen(4000, () => {
      console.log("Servidor iniciado en http://localhost:4000");
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

startServer();
