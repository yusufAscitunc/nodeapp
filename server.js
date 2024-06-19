import express from "express";
import authRoutes from "./src/routes/authRoutes.js";
import branchRoutes from "./src/routes/branchRoutes.js";

const app = express();

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api", branchRoutes);

// base route
app.get("/", (req, res) => {
  res.status(200).send({
    status: "OK",
    message: "nodejs branch application",
  });
});

app.all("*", (req, res) =>
  res.status(404).send({ message: "404 PAGE NOT FOUND" })
);
// port setup listen requests
app.listen(3000, () => {
  console.info(`🚀 Server ready at: http://localhost:3000`);
});
