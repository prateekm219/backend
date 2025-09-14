import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Doctor from './src/models/Doctor.js';
import MedicalRecord from './src/models/MedicalRecord.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mediaccesshub';

async function run(){
  await mongoose.connect(MONGO_URI);
  console.log('Seeding...');
  await Doctor.deleteMany({});
  await MedicalRecord.deleteMany({});
  await Doctor.insertMany([
    { name:'Dr. Singh', speciality:'General Physician', weekdays:['Mon','Wed','Fri']},
    { name:'Dr. Kumar', speciality:'Radiology', weekdays:['Tue','Thu']},
    { name:'Dr. Chen', speciality:'Cardiology', weekdays:['Mon','Thu']},
    { name:'Dr. Patel', speciality:'Dermatology', weekdays:['Wed','Fri']},
    { name:'Dr. Lopez', speciality:'Pediatrics', weekdays:['Tue','Sat']},
  ]);
  await MedicalRecord.insertMany([
    { 
      title: 'Blood Test', 
      date: '2025-02-03', 
      description: 'All normal', 
      fileUrl: '/records/blood_test_report.pdf' 
    },
    { 
      title: 'X-Ray', 
      date: '2025-04-10', 
      description: 'No issues', 
      fileUrl: '/records/xray_report.pdf' 
    }
  ]);
  
  console.log('Done.');
  await mongoose.disconnect();
}
run().catch(e=>{ console.error(e); process.exit(1); });
