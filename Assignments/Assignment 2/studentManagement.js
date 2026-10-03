// MongoDB Student Management System
// Database: collegeDB
// Collection: students

use("collegeDB");

// Create collection
db.createCollection("students");

// Insert student records
db.students.insertMany([
  {
    rollNo: "23CM001",
    name: "Ravi Kumar",
    branch: "CSE-AIML",
    year: 3,
    marks: 85,
    email: "ravi@example.com"
  },
  {
    rollNo: "23CM002",
    name: "Priya Sharma",
    branch: "CSE-AIML",
    year: 3,
    marks: 92,
    email: "priya@example.com"
  },
  {
    rollNo: "23CM003",
    name: "Arjun Reddy",
    branch: "CSE",
    year: 2,
    marks: 67,
    email: "arjun@example.com"
  },
  {
    rollNo: "23CM004",
    name: "Sneha Rao",
    branch: "ECE",
    year: 3,
    marks: 48,
    email: "sneha@example.com"
  },
  {
    rollNo: "23CM005",
    name: "Kiran Kumar",
    branch: "CSE-AIML",
    year: 2,
    marks: 76,
    email: "kiran@example.com"
  },
  {
    rollNo: "23CM006",
    name: "Anjali Singh",
    branch: "ECE",
    year: 4,
    marks: 39,
    email: "anjali@example.com"
  },
  {
    rollNo: "23CM007",
    name: "Rahul Verma",
    branch: "CSE",
    year: 3,
    marks: 88,
    email: "rahul@example.com"
  }
]);

// Display all students
db.students.find();

// Display students belonging to CSE-AIML
db.students.find({ branch: "CSE-AIML" });

// Display students scoring more than 75
db.students.find({ marks: { $gt: 75 } });

// Search student using rollNo
db.students.findOne({ rollNo: "23CM001" });

// Search students based on year
db.students.find({ year: 3 });

// Search students scoring above 80
db.students.find({ marks: { $gt: 80 } });

// Search students scoring below 50
db.students.find({ marks: { $lt: 50 } });

// Update marks of a student
db.students.updateOne(
  { rollNo: "23CM001" },
  { $set: { marks: 90 } }
);

// Update email of a student
db.students.updateOne(
  { rollNo: "23CM001" },
  { $set: { email: "ravi.kumar@example.com" } }
);

// Delete student using rollNo
db.students.deleteOne({ rollNo: "23CM007" });

// Display students in descending order of marks
db.students.find().sort({ marks: -1 });

// Find highest-scoring student
db.students.find().sort({ marks: -1 }).limit(1);

// Create index on rollNo
db.students.createIndex({ rollNo: 1 });

// Display indexes
db.students.getIndexes();

// Demonstrate index usage
db.students
  .find({ rollNo: "23CM001" })
  .explain("executionStats");