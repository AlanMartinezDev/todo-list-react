import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") {
      setErrorMessage("The item cannot be empty.");
      return;
    }

    onSubmit(newItem);
    setNewItem("");
    setErrorMessage("");
  };

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={handleChange}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}
