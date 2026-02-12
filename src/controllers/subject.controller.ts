import { Request, Response } from "express";
import Subject from "../models/Subject";

export const createSubject = async (req: Request, res: Response) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getSubjects = async (_req: Request, res: Response) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSubject = async (req: Request, res: Response) => {
  try {
    const updated = await Subject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ message: "Subject deleted" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
