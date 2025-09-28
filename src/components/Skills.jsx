import { useState } from "react";

export default function Skills() {
  const [isEditing, setIsEditing] = useState(true);
  const [input, setInput] = useState("");
  const [skills, setSkills] = useState(["react", "html", "css"]);

  const addSkill = () => {
    if (input.trim() === "") return;
    setSkills([...skills, input.trim()]);
    setInput("");
  };

  const removeSkill = (indexToRemove) =>
    setSkills(skills.filter((_, idx) => idx !== indexToRemove));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="component skills">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="skill">Add Skill</label>
            <div>
              <input
                id="skill"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. JavaScript"
                style={{ marginBottom: 8 }}
              />
              <div>
                <button type="button" className="btn" onClick={addSkill}>
                  Add
                </button>
                <button type="submit" className="btn primary">
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="form-row">
            <label>Current</label>
            <div className="skills-list">
              {skills.map((s, i) => (
                <div key={i} className="skill-tag">
                  {s}{" "}
                  <button
                    className="btn ghost"
                    onClick={() => removeSkill(i)}
                    style={{ marginLeft: 8 }}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>
      ) : (
        <div>
          <div className="display-row">
            <div className="label">Skills</div>
            <div className="value">
              <div className="skills-list">
                {skills.map((s, i) => (
                  <div key={i} className="skill-tag">
                    {s}
                  </div>
                ))}
              </div>
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
