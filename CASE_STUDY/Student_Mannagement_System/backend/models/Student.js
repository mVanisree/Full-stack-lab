const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    rollNo: { type: String, required: [true, "Roll number is required"], unique: true, trim: true },
    name: { type: String, required: [true, "Name is required"], trim: true },
    email: { type: String, required: [true, "Email is required"], trim: true, lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"] },
    department: { type: String, required: [true, "Department is required"], trim: true, uppercase: true },
    year: { type: Number, required: [true, "Year is required"], min: [1, "Year must be 1-6"], max: [6, "Year must be 1-6"] },
    phone: { type: String, required: [true, "Phone is required"], trim: true, match: [/^\d{10}$/, "Phone must be 10 digits"] },
    attendancePercentage: { type: Number, required: [true, "Attendance is required"], min: 0, max: 100 },
  },
  { timestamps: true } // adds createdAt and updatedAt
);
// Indexes (rollNo unique index comes from unique:true above)
studentSchema.index({ department: 1 });
studentSchema.index({ year: 1 });
module.exports = mongoose.model("Student", studentSchema);
