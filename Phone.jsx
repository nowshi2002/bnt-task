import React, { useState } from "react";

function formatPhone(value) {
  const digits = value.replace(/\D/g, "");
  let formatted = "";
  if (digits.length > 0) {
    formatted += "(" + digits.slice(0, 2) + ")";
  }
  if (digits.length > 2) {
    formatted += " " + digits.slice(2, 5);
  }
  if (digits.length > 5) {
    formatted += "-" + digits.slice(5, 9);
  }
  return formatted;
}
 function Phone() {
  const [input, setInput] = useState("");
  const handleChange = e => setInput(formatPhone(e.target.value));

  return (
    <div>
      <h1>Telephone Formatter</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        maxLength={14}
        placeholder="Enter phone (+91) 123-4567"
      />
      <div>
        <b>Formatted:</b> {input}
      </div>
    </div>
  );    
}

export default Phone
