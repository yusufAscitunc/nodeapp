import { Router } from "express";
import {
  listBranches,
  getBranchById,
  updateBranch,
} from "../controller/branchController.js";
import { verifyToken, checkRole } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/branches", verifyToken, listBranches);
router.get("/branches/:id", verifyToken, getBranchById);
router.get("/branches/:id", verifyToken, checkRole("owner"), updateBranch);

export default router;
