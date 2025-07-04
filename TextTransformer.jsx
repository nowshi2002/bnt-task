import React, { useState } from "react";

function TextTransformer() {
  const [text, setText] = useState("");
  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  const toReverse = () => setText(text.split("").reverse().join(""));
  const toCapitalize = () =>
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());

  return (
    <div>
      <h1>Text Transformer</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <div style={{ margin: "10px 0" }}>
        <button onClick={toUpperCase}>Uppercase</button>
        <button onClick={toLowerCase}>Lowercase</button>
        <button onClick={toReverse}>Reverse</button>
        <button onClick={toCapitalize}>Capitalize</button>
      </div>
      <div>
        <b>Result:</b> {text}
      </div>
    </div>
  );
}
export default  TextTransformer