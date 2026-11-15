# Project Setup and Deployment (fill in your own details)

## 1. MongoDB Atlas
1. Sign in at mongodb.com/atlas → create a free (M0) cluster.
2. Database Access → Add user (username + strong password; keep it private).
3. Network Access → Add IP. For local work use your current IP. Render uses changing IPs, so for a classroom demo you may allow `0.0.0.0/0`; this is less secure, so use demo data only.
4. Connect → Drivers → copy the string and replace `<username>`/`<password>`. This is `MONGODB_URI`.
The database and collection are created automatically on first insert (or by `npm run seed`).

## 2. Push to GitHub
Create your own repository and push the project. `.env` is git-ignored; never commit it.

## 3. Render (backend)
New → Web Service → connect repo. Root Directory `backend`, Build Command `npm install`, Start Command `npm start`. Environment variables: `MONGODB_URI`, `DB_NAME=student_management_db`, `FRONTEND_ORIGIN=<YOUR-VERCEL-URL>`. After deploy, open `<YOUR-RENDER-URL>/api/health`.

## 4. Vercel (frontend)
Import repo. Root Directory `frontend`, Framework Vite (build `npm run build`, output `dist`). Environment variable: `VITE_API_URL=<YOUR-RENDER-URL>`. Deploy, then put the Vercel URL into Render's `FRONTEND_ORIGIN` and redeploy.

## 5. Concepts
- **Web hosting**: a server that keeps your app online. **Domain name**: human-readable address. **DNS**: maps a domain to a server's IP/host. **Environment variables**: settings and secrets kept outside code. Never put `MONGODB_URI` in a `VITE_` variable (it becomes public).

## 6. Indexes
Defined in `backend/models/Student.js`; created when the app/seed runs. Check in Atlas → Collections → Indexes.
