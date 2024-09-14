import { Router } from 'express';
import { getGuests, updateGuest } from '../controllers/guestController';

const router = Router();

router.get('/guests', getGuests);
router.post('/update-guest', updateGuest);

export default router;
