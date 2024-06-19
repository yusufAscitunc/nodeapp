import jwt from "jsonwebtoken";
const SECRET_KEY = "very_secret_key";

export const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(403).send({ auth: false, message: "Invalid token" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "failed to verify token" });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

export const checkRole = (role) => {
  return (req, res, next) => {
    if (req.userRole !== role) {
      return res.status(403).send({ auth: false, message: "Access denied" });
    }
    next();
  };
};
