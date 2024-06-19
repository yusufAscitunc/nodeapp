import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import connection from "../database/connection/index.js";

const SECRET_KEY = "very_secret_key";

export const login = (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ?";
  connection.query(query, [username], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(404).send("Not Found");
    }

    const user = result[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, token: null });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
      expiresIn: 86400,
    });
    res.status(200).send({ auth: true, token: token });
  });
};
