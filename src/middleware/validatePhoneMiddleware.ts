import { Request, Response, NextFunction } from 'express';

export const validatePhoneMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { phone } = req.body;
  if (!phone || phone.trim() === '') {
    return res.status(400).json({ error: 'El teléfono es necesario.' });
  }
  next();
};
