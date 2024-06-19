import connection from "../database/connection/index.js";

export const listBranches = (req, res) => {
  connection.query("SELECT * FROM branches", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

export const getBranchById = (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM branches WHERE branch_id = ?",
    [id],
    (error, results) => {
      if (error) throw error;
      res.json(results[0]);
    }
  );
};

export const updateBranch = (req, res) => {
  const { id } = req.params;
  const { name, full_address, latitude, longitude, phone } = req.body;
  const query =
    "UPDATE branches SET name = ?, full_address = ?, latitude = ?, longitude = ?, phone = ? WHERE branch_id = ?";
  connection.query(
    query,
    [name, full_address, latitude, longitude, phone, id],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "UPDATED" });
    }
  );
};
