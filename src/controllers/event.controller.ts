import { Request, Response } from "express";
import Event from "../models/Event";

// CREATE
export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// GET ALL
export const getEvents = async (_req: Request, res: Response) => {
  try {
    const events = await Event.find().populate("classId");
    res.json(events);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateEvent = async (req: Request, res: Response) => {
  try {
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
