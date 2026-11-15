const mongoose = require("mongoose");
// Connects to MongoDB Atlas using credentials from .env
module.exports = async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME || "student_management_db",
  });
  console.log("MongoDB connected");
};
