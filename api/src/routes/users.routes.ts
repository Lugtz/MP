import { Router, Request, Response } from "express";
import User from "../models/user.model";

const router = Router();

// Obtener todos los usuarios
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password"); // Excluir contraseña
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
});

export default router;
