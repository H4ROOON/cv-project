import { useState } from "react";

export default function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState("Haroon Adeel");
  const [phone, setPhone] = useState("0312-3456789");
  const [email, setEmail] = useState("yourname@haroon.com");

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }
  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="component general-info">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <div className="label">Name</div>
            <div className="value">{name}</div>
          </div>

          <div className="display-row">
            <div className="label">Phone</div>
            <div className="value">{phone}</div>
          </div>

          <div className="display-row">
            <div className="label">Email</div>
            <div className="value">{email}</div>
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
