const Student = require("../models/Student");

// Turns Mongoose errors into friendly HTTP responses
function handleError(err, res) {
  if (err.code === 11000) return res.status(409).json({ message: "Roll number already exists" });
  if (err.name === "ValidationError")
    return res.status(400).json({ message: Object.values(err.errors).map((e) => e.message).join(", ") });
  if (err.name === "CastError") return res.status(400).json({ message: "Invalid student id" });
  console.error(err);
  res.status(500).json({ message: "Server error" });
}
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

exports.createStudent = async (req, res) => {
  try { res.status(201).json(await Student.create(req.body)); } catch (e) { handleError(e, res); }
};
// GET /api/students?search=&department=&year=
exports.getStudents = async (req, res) => {
  try {
    const { search, department, year } = req.query;
    const filter = {};
    if (search) {
      const rx = new RegExp(escapeRegex(search.trim()), "i");
      filter.$or = [{ name: rx }, { rollNo: rx }];
    }
    if (department) filter.department = department.toUpperCase();
    if (year) filter.year = Number(year);
    res.json(await Student.find(filter).sort({ rollNo: 1 }));
  } catch (e) { handleError(e, res); }
};
exports.getStudent = async (req, res) => {
  try {
    const s = await Student.findById(req.params.id);
    if (!s) return res.status(404).json({ message: "Student not found" });
    res.json(s);
  } catch (e) { handleError(e, res); }
};
exports.updateStudent = async (req, res) => {
  try {
    const s = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!s) return res.status(404).json({ message: "Student not found" });
    res.json(s);
  } catch (e) { handleError(e, res); }
};
exports.deleteStudent = async (req, res) => {
  try {
    const s = await Student.findByIdAndDelete(req.params.id);
    if (!s) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (e) { handleError(e, res); }
};

// ---- Aggregation reports ----
exports.departmentSummary = async (req, res) => {
  try {
    res.json(await Student.aggregate([
      { $group: { _id: "$department", studentCount: { $sum: 1 },
          averageAttendance: { $avg: "$attendancePercentage" } } },
      { $project: { studentCount: 1, averageAttendance: { $round: ["$averageAttendance", 2] } } },
      { $sort: { _id: 1 } },
    ]));
  } catch (e) { handleError(e, res); }
};
exports.yearSummary = async (req, res) => {
  try {
    res.json(await Student.aggregate([
      { $group: { _id: "$year", studentCount: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]));
  } catch (e) { handleError(e, res); }
};
// Total students + overall average attendance (one group with _id: null)
exports.totalStudents = async (req, res) => {
  try {
    const r = await Student.aggregate([
      { $group: { _id: null, totalStudents: { $sum: 1 }, averageAttendance: { $avg: "$attendancePercentage" } } },
    ]);
    res.json({ totalStudents: r[0]?.totalStudents || 0,
      averageAttendance: r[0] ? Math.round(r[0].averageAttendance * 100) / 100 : 0 });
  } catch (e) { handleError(e, res); }
};
