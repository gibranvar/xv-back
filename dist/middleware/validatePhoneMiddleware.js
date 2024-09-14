"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhoneMiddleware = void 0;
const validatePhoneMiddleware = (req, res, next) => {
    const { phone } = req.body;
    if (!phone || phone.trim() === '') {
        return res.status(400).json({ error: 'El teléfono es necesario.' });
    }
    next();
};
exports.validatePhoneMiddleware = validatePhoneMiddleware;
