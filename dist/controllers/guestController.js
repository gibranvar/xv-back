"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGuest = exports.getGuests = void 0;
const guestModel_1 = __importDefault(require("../models/guestModel"));
const getGuests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const guests = yield guestModel_1.default.find();
        res.json(guests);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});
exports.getGuests = getGuests;
const updateGuest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, tickets, telephone, attendance } = req.body;
        const guest = yield guestModel_1.default.findOne({ name });
        if (!guest)
            return res.status(404).json({ message: 'Guest not found' });
        if (guest.attendance)
            return res.status(400).json({ message: 'Cannot modify, already confirmed' });
        guest.tickets = tickets;
        guest.telephone = telephone;
        guest.attendance = attendance;
        guest.confirmation_date = new Date();
        yield guest.save();
        res.json(guest);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});
exports.updateGuest = updateGuest;
