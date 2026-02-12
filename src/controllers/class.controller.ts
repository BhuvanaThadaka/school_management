import { Request, Response } from "express";
import Class from "../models/Class";

// Create Class (Admin only)
export const createClass = async (req: Request, res: Response) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Classes
export const getClasses = async (_req: Request, res: Response) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update Class
export const updateClass = async (req: Request, res: Response) => {
  try {
    const updated = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Class
export const deleteClass = async (req: Request, res: Response) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.json({ message: "Class deleted" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};