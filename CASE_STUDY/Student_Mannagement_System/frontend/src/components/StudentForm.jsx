import { useState, useEffect } from "react";
const empty = { rollNo: "", name: "", email: "", department: "", year: "", phone: "", attendancePercentage: "" };
const labels = { rollNo: "Roll Number", name: "Student Name", email: "Email", department: "Department",
  year: "Academic Year", phone: "Phone Number", attendancePercentage: "Attendance %" };

// Used for both adding and editing. "editing" is the student being edited (or null).
export default function StudentForm({ editing, onSave, onCancel, saving }) {
  const [form, setForm] = useState(empty);
  useEffect(() => {
    setForm(editing ? Object.fromEntries(Object.keys(empty).map((k) => [k, String(editing[k])])) : empty);
  }, [editing]);
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    const ok = await onSave({ ...form, year: Number(form.year), attendancePercentage: Number(form.attendancePercentage) });
    if (ok && !editing) setForm(empty);
  };
  const num = ["year", "attendancePercentage"];
  return (
    <form className="card form" onSubmit={submit}>
      <h3>{editing ? "Edit Student" : "Add Student"}</h3>
      <div className="grid">
        {Object.keys(empty).map((k) => (
          <label key={k}>{labels[k]}
            <input name={k} value={form[k]} onChange={change} required
              type={num.includes(k) ? "number" : k === "email" ? "email" : "text"}
              min={k === "year" ? 1 : 0} max={k === "year" ? 6 : k === "attendancePercentage" ? 100 : undefined} />
          </label>
        ))}
      </div>
      <button className="btn" disabled={saving}>{saving ? "Saving..." : editing ? "Update Student" : "Add Student"}</button>
      {editing && <button type="button" className="btn gray" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
