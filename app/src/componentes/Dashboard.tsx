import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { Task } from "../models/Task";

const UserDashboard = () => {
  const userId = "id-del-usuario"; // Reemplazar con el ID del usuario autenticado
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  return (
    <div className="container mt-5">
      <h2>Bienvenido</h2>
      <div className="row">
        <div className="col-md-6">
          <TaskList userId={userId} onEdit={(task) => setTaskToEdit(task)} />
        </div>
        <div className="col-md-6">
          <TaskForm
            userId={userId}
            taskToEdit={taskToEdit || undefined}
            onTaskUpdated={() => setTaskToEdit(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
