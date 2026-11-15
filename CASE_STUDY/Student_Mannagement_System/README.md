# Student Management System
A full-stack MERN-style app (React + Express + MongoDB Atlas) to add, view, search, filter, update and delete student records, with MongoDB aggregation reports.

## Features
CRUD for students · search by name/roll number · filter by department and year · dashboard statistics · department-wise, year-wise and attendance reports (aggregation) · validation and duplicate roll-number handling · responsive sidebar dashboard.

## Technologies
Frontend: React, Vite, CSS3, Fetch API. Backend: Node.js, Express, Mongoose, CORS, dotenv. Database: MongoDB Atlas (`student_management_db` → `students`). Hosting: Vercel (frontend), Render (backend).

## Folder structure
```
Student-Management-System/
├── backend/   (config/db.js, models/Student.js, controllers/, routes/, server.js, seed.js)
├── frontend/  (src/App.jsx, components/, App.css, index.css, main.jsx)
├── documentation/  (case study DOCX + PDF)
├── screenshots/
├── README.md  PROJECT_SETUP.md  .gitignore
```

## Installation and running
1. **MongoDB Atlas**: create a free cluster, a database user, allow your IP under Network Access, and copy the connection string (Connect → Drivers).
2. **Backend**
   ```
   cd backend
   npm install
   cp .env.example .env     # then put YOUR MONGODB_URI in .env
   npm run seed             # optional demo data
   npm start                # http://localhost:5000
   ```
3. **Frontend** (new terminal)
   ```
   cd frontend
   npm install
   cp .env.example .env     # VITE_API_URL=http://localhost:5000
   npm run dev              # http://localhost:5173
   ```

## API endpoints
| Method | Endpoint | Function |
|---|---|---|
| GET | /api/health | Server status |
| POST | /api/students | Add student (201; 400 invalid; 409 duplicate rollNo) |
| GET | /api/students | List students; optional `?search=&department=&year=` |
| GET | /api/students/:id | One student |
| PUT | /api/students/:id | Update student |
| DELETE | /api/students/:id | Delete student |
| GET | /api/reports/department-summary | Count + average attendance per department |
| GET | /api/reports/year-summary | Count per year |
| GET | /api/reports/total-students | Total students + overall average attendance (extra) |

See `PROJECT_SETUP.md` (Atlas → Render → Vercel). URLs: Frontend `<YOUR-VERCEL-URL>`, Backend `<YOUR-RENDER-URL>` (placeholders until you deploy).

