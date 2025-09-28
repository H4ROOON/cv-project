import { useState } from "react";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [title, setTitle] = useState("Frontend Developer");
  const [company, setCompany] = useState("Google");
  const [description, setDescription] = useState("Worked on building UI.");
  const [startYear, setStartYear] = useState("2025");
  const [endYear, setEndYear] = useState("Present");

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }
  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="component experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="title">Job Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            <div className="label">Title</div>
            <div className="value">{title}</div>
          </div>

          <div className="display-row">
            <div className="label">Company</div>
            <div className="value">{company}</div>
          </div>

          <div className="display-row">
            <div className="label">Description</div>
            <div className="value">{description}</div>
          </div>

          <div className="display-row">
            <div className="label">Duration</div>
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
