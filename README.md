# 🩺 MediAccessHub Patient Portal – Backend

This is the **backend API** for the MediAccessHub Patient Portal, built with **Node.js, Express, and MongoDB (Mongoose)**.  
It powers user authentication, appointments, and medical record management.  

---

## 🚀 Features
- 👥 **Authentication** → Register & Login with JWT tokens  
- 🔐 **Protected Routes** → Only logged-in users can access their data  
- 📅 **Appointments** → Patients can request, view, and update appointments  
- 📂 **Medical Records** → Patients can view static medical records (dummy data seeded)  
- 👨‍⚕️ **Doctors** → Pre-seeded dummy doctors available for booking  

---

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/) – server runtime  
- [Express.js](https://expressjs.com/) – backend framework  
- [MongoDB + Mongoose](https://mongoosejs.com/) – database + ODM  
- [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) – authentication  
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) – password hashing  
- [CORS](https://www.npmjs.com/package/cors) – API access from frontend  

---

## 📦 Dependencies

### Main
- **express** → HTTP server framework  
- **mongoose** → MongoDB object modeling  
- **cors** → Cross-Origin Resource Sharing  
- **dotenv** → Environment variable support  
- **jsonwebtoken** → JWT authentication  
- **bcryptjs** → Password hashing  

### Dev
- **nodemon** → Auto-restart server during development  

---

## ⚙️ Installation (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/patient-portal-backend.git
   cd patient-portal-backend

2. **Install Dependencies**
   ```bash
   npm install

3. **Set up environment variables**
   ```bash
   PORT=5001
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portal
   JWT_SECRET=yourSecretKey

4. **Run database seeding**
   ```bash
   npm run seed

4. **Start the backend**
   ```bash
   npm run dev

