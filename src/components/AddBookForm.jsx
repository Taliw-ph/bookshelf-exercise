"use client";
import { useState } from "react";

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      title,
      id: Date.now(),
    });
    setTitle("");
  };
  return (
    <div>
      <h1>ADD TO COLLECTION</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Category </label>
          <select>
            <option>Computer</option>
            <option>Novel</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
