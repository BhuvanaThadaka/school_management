import express from "express";
import {
  getDashboardStats,
  getAllTeachers,
  getAllStudents,
  updateUser,
  deleteUser,
} from "../controllers/admin.controller";

import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = express.Router();

// Only ADMIN can access
router.use(authMiddleware, roleMiddleware(["ADMIN"]));

router.get("/dashboard", getDashboardStats);
router.get("/teachers", getAllTeachers);
router.get("/students", getAllStudents);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
