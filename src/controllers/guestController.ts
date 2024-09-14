import { Request, Response } from 'express';
import Guest from '../models/guestModel';

export const getGuests = async (req: Request, res: Response) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updateGuest = async (req: Request, res: Response) => {
  try {
    const { name, tickets, telephone, attendance } = req.body;
    const guest = await Guest.findOne({ name });

    if (!guest) return res.status(404).json({ message: 'Guest not found' });
    if (guest.attendance) return res.status(400).json({ message: 'Cannot modify, already confirmed' });

    guest.tickets = tickets;
    guest.telephone = telephone;
    guest.attendance = attendance;
    guest.confirmation_date = new Date();

    await guest.save();
    res.json(guest);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
