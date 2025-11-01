# 🎓 Online Course Platform (MERN Stack)

A full-stack **Learning Management System (LMS)** built using the **MERN stack**, featuring **PayPal Sandbox integration** for secure course payments and **Cloudinary** for video uploads.

> ⚠️ *This project is currently in demo mode using PayPal Sandbox — no real money transactions occur.*

---

## 🚀 Live Demo
🔗 **Frontend:** [https://your-frontend-link.vercel.app](https://your-frontend-link.vercel.app)  
🔗 **Backend API:** [https://your-backend-link.onrender.com](https://your-backend-link.onrender.com)

---

## 🧰 Tech Stack

### 💻 Frontend
- **React.js** (Vite or CRA)
- **React Router DOM** for routing
- **Axios** for API calls
- **Tailwind CSS / CSS Modules** for styling

### ⚙️ Backend
- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **JWT Authentication**
- **Cloudinary** for media uploads
- **PayPal REST API (Sandbox)** for payments

### ☁️ Deployment
- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Render](https://render.com/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Media Storage:** [Cloudinary](https://cloudinary.com/)

---

## ✨ Features

### 👩‍🏫 For Students
- Browse and view available courses  
- Purchase courses via **PayPal Sandbox**  
- Watch course videos hosted on **Cloudinary**  
- Track purchased courses  

### 🧑‍💻 For Instructors / Admin
- Add, edit, and delete courses  
- Upload course thumbnails and videos  
- Manage enrolled students  

### 🔐 Authentication
- Secure login and signup using **JWT**  
- Role-based access control (Student / Admin)

### 💳 Payment System
- Integrated **PayPal Sandbox**  
- Realistic checkout process (no real transactions)

---

## 🗂️ Folder Structure
```
online-course-platform/
│
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/ # Node + Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ └── package.json
│
└── README.md
```

## ⚙️ Setup & Installation

 1️⃣ Clone Repository
```
git clone https://github.com/yourusername/online-course-platform.git
cd online-course-platform
```

2️⃣ Backend Setup
```
cd server
npm install
Create a .env file inside /server:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_sandbox_client_id
PAYPAL_SECRET=your_sandbox_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Start the server:
npm run dev
```
3️⃣ Frontend Setup
```
cd ../client
npm install
Create a .env file inside /client:

env
Copy code
VITE_API_URL=https://your-backend-link.onrender.com
VITE_PAYPAL_CLIENT_ID=your_sandbox_client_id
Start the React app:

npm run dev
```
🧩 Environment Variables Summary
```
Variable	Description
MONGO_URI	MongoDB Atlas connection string
JWT_SECRET	Secret for JWT token signing
PAYPAL_CLIENT_ID	PayPal sandbox client ID
PAYPAL_SECRET	PayPal sandbox secret
CLOUDINARY_*	Cloudinary credentials
VITE_API_URL	Backend URL for API calls
```
📸 Screenshots (Optional)
(You can add images here later, like login page, course list, payment popup, etc.)

📄 License
This project is open source and available under the MIT License.

🙌 Acknowledgements
PayPal Developer Docs

Cloudinary API Docs

MongoDB Atlas

Render

Vercel

💬 Author
👨‍💻 Rakesh [YourLastName]

📧 [your.email@example.com]

🌐 [your-portfolio-link.vercel.app] (optional)

🔗 LinkedIn | GitHub
