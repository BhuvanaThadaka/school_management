import { Router } from "express";
import {
  createSubject,
  getSubjects,
  updateSubject,
  deleteSubject
} from "../controllers/subject.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = Router();

router.post("/", authMiddleware, roleMiddleware(["ADMIN"]), createSubject);
router.get("/", authMiddleware, getSubjects);
router.put("/:id", authMiddleware, roleMiddleware(["ADMIN"]), updateSubject);
router.delete("/:id", authMiddleware, roleMiddleware(["ADMIN"]), deleteSubject);

export default router;
