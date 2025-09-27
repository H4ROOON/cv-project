import { useState } from "react";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);

  const [title, setTitle] = useState("Frontend Developer");
  const [company, setCompany] = useState("Google");
  const [description, setDescription] = useState("Worked on building UI.");
  const [startYear, setStartYear] = useState(2025);
  const [endYear, setEndYear] = useState("Present");

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
            <label htmlFor="title">Job Title </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="company">Company </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description">Description </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              onChange={(e) => setStartYear(Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="endYear">End Year </label>
            <input
              type="text"
              id="endYear"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              placeholder="e.g. 2028 or Present"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Title:</strong> {title}
          </p>
          <p>
            <strong>Company:</strong> {company}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Duration:</strong> {startYear} – {endYear}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
