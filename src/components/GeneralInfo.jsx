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
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name">Name </label>
            <input
              type="text"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="Phone">Phone </label>
            <input
              type="tel"
              id="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
