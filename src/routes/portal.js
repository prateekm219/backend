import express from 'express';
import auth from '../middleware/auth.js';
import Appointment from '../models/Appointment.js';
import Doctor from '../models/Doctor.js';
import MedicalRecord from '../models/MedicalRecord.js';

const router = express.Router();

// Static: list doctors
router.get('/doctors', async (req,res)=>{
  const doctors = await Doctor.find({}).sort({name:1});
  res.json(doctors);
});

// Static: medical records (dummy list)
router.get('/records', async (req,res)=>{
  const records = await MedicalRecord.find({}).sort({date:1});
  res.json(records);
});

// Appointments (patient specific)
router.get('/appointments', auth, async (req,res)=>{
  const list = await Appointment.find({patientId: req.user.id}).sort({date:1, time:1});
  res.json(list);
});

router.post('/appointments', auth, async (req,res)=>{
  const { doctorName, date, time, reason } = req.body;
  const appt = await Appointment.create({ patientId: req.user.id, doctorName, date, time, reason });
  res.json(appt);
});

router.put('/appointments/:id', auth, async (req,res)=>{
  const { id } = req.params;
  const update = await Appointment.findOneAndUpdate({ _id:id, patientId:req.user.id }, req.body, { new:true });
  if(!update) return res.status(404).json({message:'Not found'});
  res.json(update);
});

router.delete('/appointments/:id', auth, async (req,res)=>{
  const { id } = req.params;
  const del = await Appointment.findOneAndDelete({ _id:id, patientId:req.user.id });
  if(!del) return res.status(404).json({message:'Not found'});
  res.json({ok:true});
});

export default router;
