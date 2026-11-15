const router = require("express").Router();
const c = require("../controllers/studentController");

router.get("/health", (req, res) => res.json({ status: "ok", message: "Student Management API is running" }));
router.route("/students").get(c.getStudents).post(c.createStudent);
router.route("/students/:id").get(c.getStudent).put(c.updateStudent).delete(c.deleteStudent);
router.get("/reports/department-summary", c.departmentSummary);
router.get("/reports/year-summary", c.yearSummary);
router.get("/reports/total-students", c.totalStudents);
module.exports = router;
