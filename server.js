import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './src/routes/auth.js';
import portalRoutes from './src/routes/portal.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mediaccesshub';

mongoose.connect(MONGO_URI).then(()=>{
  console.log('MongoDB connected');
}).catch(err=>{
  console.error('Mongo error', err);
});

app.get('/', (req,res)=>{
  res.json({status:'ok', service:'MediAccessHub Backend'});
});

app.use('/api/auth', authRoutes);
app.use('/api', portalRoutes);

app.listen(PORT, ()=>console.log('Server running on port', PORT));
