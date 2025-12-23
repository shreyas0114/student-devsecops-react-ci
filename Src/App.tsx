import { useState } from "react";

type Student = {
  name: string;
  unit1: number;
  unit2: number;
  assignments: number;
};

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState<Student>({
    name: "",
    unit1: 0,
    unit2: 0,
    assignments: 0,
  });

  const calculate = (s: Student) => {
    const total = s.unit1 + s.unit2 + s.assignments * 5;
    const average = total / 3;

    let grade = "C";
    if (average >= 18) grade = "A";
    else if (average >= 12) grade = "B";

    return { total, average: average.toFixed(2), grade };
  };

  const addStudent = () => {
    if (!form.name) return;
    setStudents([...students, form]);
    setForm({ name: "", unit1: 0, unit2: 0, assignments: 0 });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h1>Student Performance Dashboard</h1>

      <h3>Add Student</h3>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Unit 1 Marks"
        value={form.unit1}
        onChange={(e) => setForm({ ...form, unit1: Number(e.target.value) })}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Unit 2 Marks"
        value={form.unit2}
        onChange={(e) => setForm({ ...form, unit2: Number(e.target.value) })}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Assignments Count"
        value={form.assignments}
        onChange={(e) =>
          setForm({ ...form, assignments: Number(e.target.value) })
        }
      />
      <br /><br />

      <button onClick={addStudent}>Add Student</button>

      <hr />

      <h3>Student List</h3>

      {students.length === 0 && <p>No students added yet.</p>}

      {students.map((s, index) => {
        const result = calculate(s);
        return (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{s.name}</strong> → Total: {result.total}, Avg:{" "}
            {result.average}, Grade: {result.grade}
          </div>
        );
      })}
    </div>
  );
}

export default App;
