import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [content, setContent] = useState("");

  const handleChange = e => {
    const newValue = e.target.value;
    setContent(newValue);
  };
  const handleClick = () => {
    setList(prevValue => {
      return [...prevValue, content];
    });
    setContent("");
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="contents"
          type="text"
          value={content}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(items => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
