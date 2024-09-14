"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guestController_1 = require("../controllers/guestController");
const router = (0, express_1.Router)();
router.get('/guests', guestController_1.getGuests);
router.post('/update-guest', guestController_1.updateGuest);
exports.default = router;
