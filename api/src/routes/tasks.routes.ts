import { Router, Request, Response } from "express";
import Task from "../models/task.model";

const router = Router();

// Crear una tarea
router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate, status, userId } = req.body;
    const newTask = new Task({ title, description, dueDate, status, userId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error al crear tarea", error });
  }
});

// Obtener todas las tareas de un usuario
router.get("/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas", error });
  }
});

// Editar una tarea
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error al editar tarea", error });
  }
});

// Eliminar una tarea
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Tarea eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar tarea", error });
  }
});

export default router;
