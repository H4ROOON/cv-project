import { useState } from "react";

export default function Skills() {
  const [isEditing, setIsEditing] = useState(true);
  const [input, setInput] = useState("");
  const [skills, setSkills] = useState(["react", "html", "css"]);

  const addSkill = () => {
    if (input.trim() === "") return;
    setSkills([...skills, input]);
    setInput("");
  };

  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log("Submitted skills:", skills);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a skill"
          />
          <button type="button" onClick={addSkill}>
            Add Skill
          </button>

          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}{" "}
                <button type="button" onClick={() => removeSkill(index)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <button type="submit">Submit All Skills</button>
        </form>
      ) : (
        <div>
          <h3>Submitted Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
