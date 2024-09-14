"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const guestRoutes_1 = __importDefault(require("./routes/guestRoutes"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const mongoUri = process.env.DB_URI;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', guestRoutes_1.default);
mongoose_1.default.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
