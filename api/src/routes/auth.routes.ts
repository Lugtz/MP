import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { login } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register); // Registrar usuario
router.post("/login", login);       // Iniciar sesión

export default router;
