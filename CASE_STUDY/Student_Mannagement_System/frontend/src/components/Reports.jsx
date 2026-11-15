export default function Reports({ departments, years }) {
  return (
    <div className="two">
      <div className="card"><h3>Department-wise Count &amp; Average Attendance</h3>
        <table><thead><tr><th>Department</th><th>Students</th><th>Avg Attendance</th></tr></thead>
          <tbody>{departments.map((d) => <tr key={d._id}><td>{d._id}</td><td>{d.studentCount}</td><td>{d.averageAttendance}%</td></tr>)}</tbody></table>
      </div>
      <div className="card"><h3>Year-wise Student Count</h3>
        <table><thead><tr><th>Year</th><th>Students</th></tr></thead>
          <tbody>{years.map((y) => <tr key={y._id}><td>Year {y._id}</td><td>{y.studentCount}</td></tr>)}</tbody></table>
      </div>
    </div>
  );
}
