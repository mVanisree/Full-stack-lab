require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());
// FRONTEND_ORIGIN may hold several comma-separated URLs
const origins = (process.env.FRONTEND_ORIGIN || "http://localhost:5173").split(",").map((o) => o.trim());
app.use(cors({ origin: origins }));
app.use("/api", require("./routes/studentRoutes"));
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => { console.error("Database connection failed:", err.message); process.exit(1); });
