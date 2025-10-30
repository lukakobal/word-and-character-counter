import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="container">
      <h1>Word & Character Counter ✍️</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Vpiši besedilo..."
      ></textarea>
      <div className="stats">
        <p>Število besed: {wordCount}</p>
        <p>Število znakov: {charCount}</p>
      </div>
    </div>
  );
}
