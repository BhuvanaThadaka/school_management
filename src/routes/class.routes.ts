import { Router } from "express";
import {
  createClass,
  getClasses,
  updateClass,
  deleteClass
} from "../controllers/class.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = Router();

router.post("/", authMiddleware, roleMiddleware(["ADMIN"]), createClass);
router.get("/", authMiddleware, getClasses);
router.put("/:id", authMiddleware, roleMiddleware(["ADMIN"]), updateClass);
router.delete("/:id", authMiddleware, roleMiddleware(["ADMIN"]), deleteClass);

export default router;
