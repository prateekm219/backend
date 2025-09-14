import mongoose from 'mongoose';
const DoctorSchema = new mongoose.Schema({
  name: String,
  speciality: String,
  weekdays: [String]
}, {timestamps:true});
export default mongoose.model('Doctor', DoctorSchema);
