import { Request, Response } from "express";
import User from "../models/User";
import Class from "../models/Class";
import Subject from "../models/Subject";

// Get dashboard stats
export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const teacherCount = await User.countDocuments({ role: "TEACHER" });
    const studentCount = await User.countDocuments({ role: "STUDENT" });
        const classCount = await Class.countDocuments({});
 const subjectCount = await Subject.countDocuments({});
    res.json({
      totalTeachers: teacherCount,
      totalStudents: studentCount,
      totalClasses:classCount,
      totalSubjects:subjectCount,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get all teachers
export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await User.find({ role: "TEACHER" }).select("-password");
    res.json(teachers);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get all students
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await User.find({ role: "STUDENT" }).select("-password");
    res.json(students);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    }).select("-password");

    res.json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
