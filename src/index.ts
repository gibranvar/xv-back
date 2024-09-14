import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import guestRoutes from './routes/guestRoutes';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri: string = process.env.DB_URI!;

app.use(cors());
app.use(express.json());
app.use('/api', guestRoutes);

mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDb'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
