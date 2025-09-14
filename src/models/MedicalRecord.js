import mongoose from 'mongoose';
const MedicalRecordSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  fileUrl: String
}, {timestamps:true});
export default mongoose.model('MedicalRecord', MedicalRecordSchema);
