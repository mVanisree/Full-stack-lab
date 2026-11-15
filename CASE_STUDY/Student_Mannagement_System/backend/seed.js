// Optional: loads synthetic demo students. Run: npm run seed
require("dotenv").config();
const connectDB = require("./config/db");
const Student = require("./models/Student");
const data = [
  { rollNo: "21CSE001", name: "Asha Rao", email: "asha@example.com", department: "CSE", year: 3, phone: "9876543210", attendancePercentage: 92 },
  { rollNo: "21CSE002", name: "Ravi Kumar", email: "ravi@example.com", department: "CSE", year: 3, phone: "9876543211", attendancePercentage: 78 },
  { rollNo: "22ECE001", name: "Sneha Reddy", email: "sneha@example.com", department: "ECE", year: 2, phone: "9876543212", attendancePercentage: 85 },
  { rollNo: "23EEE001", name: "Kiran Varma", email: "kiran@example.com", department: "EEE", year: 1, phone: "9876543213", attendancePercentage: 88 },
];
(async () => {
  await connectDB();
  await Student.init(); // builds indexes
  for (const d of data) await Student.updateOne({ rollNo: d.rollNo }, d, { upsert: true });
  console.log("Seeded", data.length, "students");
  process.exit(0);
})();
