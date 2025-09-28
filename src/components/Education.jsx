import { useState } from "react";

export default function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [school, setSchool] = useState("PENN");
  const [degree, setDegree] = useState("Computer-Science");
  const [startYear, setStartYear] = useState("2024");
  const [endYear, setEndYear] = useState("2028");

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }
  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="component education">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="school">School</label>
            <input
              id="school"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="startYear">Start</label>
            <input
              id="startYear"
              type="text"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="endYear">End</label>
            <input
              id="endYear"
              type="text"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <div></div>
            <div className="actions">
              <button type="submit" className="btn primary">
                Save
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <div className="display-row">
            <div className="label">School</div>
            <div className="value">{school}</div>
          </div>

          <div className="display-row">
            <div className="label">Degree</div>
            <div className="value">{degree}</div>
          </div>

          <div className="display-row">
            <div className="label">Date</div>
            <div className="value">
              {startYear} – {endYear}
            </div>
          </div>

          <div className="form-actions">
            <div></div>
            <div className="actions">
              <button className="btn" onClick={handleEdit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
