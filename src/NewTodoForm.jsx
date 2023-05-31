import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") {
      setErrorMessage("The item cannot be empty.");
      return;
    }

    onSubmit(newItem);
    setNewItem("");
    setErrorMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}
