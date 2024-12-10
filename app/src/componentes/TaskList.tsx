import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/task.service";
import { Task } from "../models/Task";
import Swal from "sweetalert2";

interface TaskListProps {
  userId: string;
  onEdit: (task: Task) => void;
}

const TaskList = ({ userId, onEdit }: TaskListProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks(userId);
      setTasks(data);
    } catch (error) {
      Swal.fire("Error", "No se pudieron cargar las tareas", "error");
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      Swal.fire("Eliminado", "La tarea fue eliminada", "success");
      fetchTasks();
    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar la tarea", "error");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [userId]);

  return (
    <div>
      <h3>Mis Tareas</h3>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{task.title}</strong> - {task.dueDate}
            </span>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(task)}>
                Editar
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task._id!)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
