import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Patient from '../models/Patient.js';

const router = express.Router();

router.post('/register', async (req,res)=>{
  try {
    const { fullName, email, dob, password } = req.body;
    if(!fullName || !email || !password) return res.status(400).json({message:'Missing fields'});
    const existing = await Patient.findOne({email});
    if(existing) return res.status(400).json({message:'Email already registered'});
    const passwordHash = await bcrypt.hash(password, 10);
    const patient = await Patient.create({ fullName, email, dob, passwordHash });
    const token = jwt.sign({ id: patient._id, email }, process.env.JWT_SECRET || 'devsecret', { expiresIn:'7d' });
    res.json({ token, user: { id: patient._id, fullName, email, dob } });
  } catch (e) {
    res.status(500).json({message:'Server error'});
  }
});

router.post('/login', async (req,res)=>{
  try {
    const { email, password } = req.body;
    const patient = await Patient.findOne({email});
    if(!patient) return res.status(400).json({message:'Invalid credentials'});
    const ok = await bcrypt.compare(password, patient.passwordHash);
    if(!ok) return res.status(400).json({message:'Invalid credentials'});
    const token = jwt.sign({ id: patient._id, email }, process.env.JWT_SECRET || 'devsecret', { expiresIn:'7d' });
    res.json({ token, user: { id: patient._id, fullName: patient.fullName, email: patient.email, dob: patient.dob } });
  } catch (e) {
    res.status(500).json({message:'Server error'});
  }
});

export default router;
