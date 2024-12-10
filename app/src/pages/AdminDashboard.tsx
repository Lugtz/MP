import React, { useEffect, useState } from "react";
import { getDashboardStats } from "../services/admin.service";
import Swal from "sweetalert2";

interface DashboardStats {
  usersCount: number;
  tasksCount: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({ usersCount: 0, tasksCount: 0 });

  const fetchStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      Swal.fire("Error", "No se pudieron cargar las estadísticas", "error");
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Dashboard del Administrador</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Usuarios Registrados</h5>
              <p className="display-4">{stats.usersCount}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Tareas Creadas</h5>
              <p className="display-4">{stats.tasksCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
