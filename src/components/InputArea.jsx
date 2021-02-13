import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={props.inputText} />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
