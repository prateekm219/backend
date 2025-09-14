import mongoose from 'mongoose';
const AppointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref:'Patient', required:true },
  doctorName: { type:String, required:true },
  date: { type:String, required:true },
  time: { type:String, required:true },
  reason: { type:String }
}, {timestamps:true});
export default mongoose.model('Appointment', AppointmentSchema);
