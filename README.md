🌴 Paradise Resort – Full Stack Booking Web App

A modern and responsive Resort Booking application built with **React + Tailwind (Vite)** on the frontend and **Node.js + TypeScript + Express + MongoDB** on the backend.

This project was created as part of a **Full Stack Machine Test**, including frontend UI, backend APIs, database integration, validation, and deployment.

---

 🚀 Live Demo

 **Frontend:**

🔗 *[frontend-url](https://resortparaside.vercel.app/)*

**Backend API:**

🔗 *[backend-url](https://paradiseresort.onrender.com/)*
⚠ Note: The backend is deployed on Render free tier.
It may take 30–60 seconds to wake up after a period of inactivity.
If the first request is slow, please wait — the server will respond.
---

✨ Features

🌟 Frontend (React + Vite + Tailwind)

* Beautiful **Hero Section** with banner, resort branding, and CTA.
* **Services Section** (Accommodation, Adventure, Wellness).
* **Gallery Section** (3+ images).
* **Footer** with contact + socials.
* Fully responsive (mobile & desktop).
* Booking Form with:

  * Live field-level validation
  * Date & time validation
  * Loading state + error UI
  * API integration
* Admin Booking List:

  * Search (name, email, phone)
  * Sort (newest / oldest)
  * Pagination
  * Skeleton loading UI
  * Clean table layout

---

🛠 Backend (Node.js + TypeScript + Express)

* REST APIs:

  * `POST /bookings` – Create a booking
  * `GET /bookings` – Fetch bookings (paginated + searchable + sortable)
  
* Zod validation for:
  * Required fields
  * Date/time combinations
  * Check-in and check-out logic
* Robust error handling with central middleware
* MongoDB database using Mongoose
* Secure, clean architecture

---

🔗 Fully Integrated Workflow

✔ Booking form → Backend API
✔ Saved in MongoDB
✔ Displayed in Admin Table

End-to-end flow implemented successfully.

---

🧩 Tech Stack

**Frontend**

* React (Vite)
* TypeScript
* Tailwind CSS
* ShadCN UI
* Axios
* Sonner (Toast)
* Lucide icons

**Backend**

* Node.js
* Express.js
* TypeScript
* Zod (validation)
* MongoDB + Mongoose
* CORS
* Dotenv

---

📦 Installation & Setup

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

### **Backend**

```bash
cd backend
npm install
npm run dev
```

#### Configure `.env`

```
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
```

---

🛠 API Endpoints

**POST /bookings**

Create a new booking.

```json
{
  "name": "John Doe",
  "email": "john@test.com",
  "phone": "9876543210",
  "checkInDate": "2025-11-20",
  "checkInTime": "11:30",
  "checkOutDate": "2025-11-22",
  "checkOutTime": "09:00",
  "message": "Prefer ocean facing room"
}
```

### **GET /bookings**

Query Parameters:

| Param  | Example | Description                |
| ------ | ------- | -------------------------- |
| page   | 1       | Current page               |
| limit  | 10      | Items per page             |
| search | john    | Search by name/email/phone |
| sort   | newest  | newest / oldest            |

---

📷 Screenshots
<img width="1891" height="823" alt="image" src="https://github.com/user-attachments/assets/5728b3dd-65a7-4f18-b8a3-0eaf95ee41b8" />
<img width="1897" height="700" alt="image" src="https://github.com/user-attachments/assets/16601ea2-0d16-4b74-8c09-9665e52e4239" />
<img width="1893" height="852" alt="image" src="https://github.com/user-attachments/assets/7df120d0-6c7d-4208-8338-104152b9d803" />
<img width="1861" height="840" alt="image" src="https://github.com/user-attachments/assets/562db01b-73e2-4488-84fd-19fd6cfe5ca5" />


---

🧠 What I Learned

* Form validation strategy (frontend + backend)
* Designing clean reusable React components
* Pagination logic
* Backend query filtering & sorting
* Deploying full stack apps
* Handling API errors gracefully

---

🚀 Deployment

 **Frontend**

✔ Deployed on Vercel

**Backend**

✔ Deployed on Render

---

## 👨‍💻 Author
Muhammed Ansar M A
Full Stack Developer – MERN & TypeScript
