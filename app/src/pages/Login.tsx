import React, { useState } from "react";
import { login } from "../services/auth.service";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token, role } = await login(email, password);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      Swal.fire("Éxito", "Inicio de sesión exitoso", "success");
      window.location.href = role === "admin" ? "/admin-dashboard" : "/user-dashboard";
    } catch (error) {
      Swal.fire("Error", "Credenciales incorrectas", "error");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
