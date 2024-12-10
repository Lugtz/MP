import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: string | JwtPayload; // Ajusta el tipo según lo que contiene el token
}

export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Acceso denegado, token no proporcionado o inválido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.user = verified; // Guarda el usuario verificado en el objeto de la solicitud
    next();
  } catch (error) {
    res.status(400).json({ message: "Token inválido" });
  }
};
