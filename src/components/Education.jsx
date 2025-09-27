import { useState } from "react";

export default function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [school, setSchool] = useState("PENN");
  const [degree, setPhone] = useState("Computer-Science");
  const [startYear, setStartYear] = useState(2024);
  const [endYear, setEndYear] = useState(2028);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }
  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="School">School </label>
            <input
              type="text"
              id="School"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="Degree">Degree </label>
            <input
              type="text"
              id="Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="startYear">Start Year </label>
            <input
              type="number"
              id="startYear"
              value={startYear}
              min="1900"
              max="2100"
              onChange={(e) => setStartYear(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="endYear">End Year </label>
            <input
              type="number"
              id="endYear"
              value={endYear}
              min={startYear}
              max="2100"
              onChange={(e) => setEndYear(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>School:</strong> {school}
          </p>
          <p>
            <strong>Degree:</strong> {degree}
          </p>
          <p>
            <strong>Date:</strong> {startYear} – {endYear}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
