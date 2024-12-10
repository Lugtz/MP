import jwt from "jsonwebtoken";

export const createToken = (payload: object, expiresIn: string | number = "1d") => {
  return jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn });
};
