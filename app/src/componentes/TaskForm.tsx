import React, { useState } from "react";
import { createTask, updateTask } from "../services/task.service";
import { Task } from "../models/Task";
import Swal from "sweetalert2";

interface TaskFormProps {
  userId: string;
  taskToEdit?: Task;
  onTaskUpdated: () => void;
}

const TaskForm = ({ userId, taskToEdit, onTaskUpdated }: TaskFormProps) => {
  const [task, setTask] = useState<Task>({
    _id: taskToEdit?._id,
    title: taskToEdit?.title || "",
    dueDate: taskToEdit?.dueDate || "",
    description: taskToEdit?.description || "",
    userId,
    status: taskToEdit?.status || "pending",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (task._id) {
        await updateTask(task._id, task);
        Swal.fire("¡Éxito!", "Tarea actualizada con éxito", "success");
      } else {
        await createTask(task);
        Swal.fire("¡Éxito!", "Tarea creada con éxito", "success");
      }
      onTaskUpdated();
    } catch (error) {
      Swal.fire("Error", "No se pudo guardar la tarea", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha de vencimiento</label>
        <input
          type="date"
          className="form-control"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {task._id ? "Actualizar" : "Crear"} Tarea
      </button>
    </form>
  );
};

export default TaskForm;
