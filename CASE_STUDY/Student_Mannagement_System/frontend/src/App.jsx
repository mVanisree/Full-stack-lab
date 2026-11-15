import { useEffect, useState } from "react";
import StatCard from "./components/StatCard.jsx";
import StudentForm from "./components/StudentForm.jsx";
import Reports from "./components/Reports.jsx";

// Backend base URL comes from VITE_API_URL (see .env.example)
const API = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "") + "/api";

async function api(path, options) {
  const res = await fetch(API + path, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}
const json = (method, body) => ({ method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [students, setStudents] = useState([]);
  const [deptReport, setDeptReport] = useState([]);
  const [yearReport, setYearReport] = useState([]);
  const [totals, setTotals] = useState({ totalStudents: 0, averageAttendance: 0 });
  const [filters, setFilters] = useState({ search: "", department: "", year: "" });
  const [editing, setEditing] = useState(null);
  const [msg, setMsg] = useState(null); // { type: "success" | "error", text }
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Loads students (with filters) and the aggregation reports
  async function loadAll() {
    setLoading(true);
    try {
      const q = new URLSearchParams(Object.entries(filters).filter(([, v]) => v)).toString();
      const [s, d, y, t] = await Promise.all([
        api("/students?" + q), api("/reports/department-summary"),
        api("/reports/year-summary"), api("/reports/total-students"),
      ]);
      setStudents(s); setDeptReport(d); setYearReport(y); setTotals(t);
    } catch (e) { setMsg({ type: "error", text: e.message }); }
    setLoading(false);
  }
  useEffect(() => { loadAll(); }, [filters]);

  async function save(data) {
    setSaving(true);
    try {
      const wasEditing = !!editing;
      if (editing) await api("/students/" + editing._id, json("PUT", data));
      else await api("/students", json("POST", data));
      setMsg({ type: "success", text: wasEditing ? "Student updated" : "Student added" });
      setEditing(null); await loadAll(); setSaving(false);
      if (wasEditing) setPage("students");
      return true;
    } catch (e) { setMsg({ type: "error", text: e.message }); setSaving(false); return false; }
  }
  async function remove(s) {
    if (!window.confirm(`Delete ${s.name} (${s.rollNo})?`)) return;
    try { await api("/students/" + s._id, { method: "DELETE" }); setMsg({ type: "success", text: "Student deleted" }); await loadAll(); }
    catch (e) { setMsg({ type: "error", text: e.message }); }
  }
  const startEdit = (s) => { setEditing(s); setPage("add"); };
  const nav = [["dashboard", "Dashboard"], ["add", editing ? "Edit Student" : "Add Student"], ["students", "Student Records"], ["reports", "Reports"]];
  const setF = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });
  const depts = deptReport.map((d) => d._id);

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>🎓 SMS Admin</h2>
        {nav.map(([k, l]) => <button key={k} className={page === k ? "active" : ""} onClick={() => setPage(k)}>{l}</button>)}
      </aside>
      <main className="content">
        <h1>Student Management System</h1>
        {msg && <div className={"alert " + msg.type} onClick={() => setMsg(null)}>{msg.text} ✕</div>}
        {loading && <p className="loading">Loading...</p>}

        {page === "dashboard" && (<>
          <div className="stats">
            <StatCard label="Total Students" value={totals.totalStudents} />
            <StatCard label="Departments" value={deptReport.length} />
            <StatCard label="Average Attendance" value={totals.averageAttendance + "%"} />
          </div>
          <div className="card"><h3>Year-wise Students</h3>
            <div className="stats">{yearReport.map((y) => <StatCard key={y._id} label={"Year " + y._id} value={y.studentCount} />)}</div>
          </div>
        </>)}

        {page === "add" && <StudentForm editing={editing} onSave={save} saving={saving} onCancel={() => setEditing(null)} />}

        {page === "students" && (
          <div className="card">
            <div className="filters">
              <input name="search" placeholder="Search name or roll no" value={filters.search} onChange={setF} />
              <select name="department" value={filters.department} onChange={setF}>
                <option value="">All Departments</option>{depts.map((d) => <option key={d}>{d}</option>)}
              </select>
              <select name="year" value={filters.year} onChange={setF}>
                <option value="">All Years</option>{[1, 2, 3, 4].map((y) => <option key={y} value={y}>Year {y}</option>)}
              </select>
            </div>
            <div className="scroll"><table>
              <thead><tr><th>Roll No</th><th>Name</th><th>Email</th><th>Dept</th><th>Year</th><th>Phone</th><th>Attendance</th><th>Actions</th></tr></thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s._id}><td>{s.rollNo}</td><td>{s.name}</td><td>{s.email}</td><td>{s.department}</td>
                    <td>{s.year}</td><td>{s.phone}</td><td>{s.attendancePercentage}%</td>
                    <td><button className="btn small" onClick={() => startEdit(s)}>Edit</button>
                      <button className="btn small red" onClick={() => remove(s)}>Delete</button></td></tr>
                ))}
                {!loading && students.length === 0 && <tr><td colSpan="8">No students found.</td></tr>}
              </tbody></table></div>
          </div>
        )}

        {page === "reports" && <Reports departments={deptReport} years={yearReport} />}
      </main>
    </div>
  );
}
