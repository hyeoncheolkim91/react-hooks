import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const isMouseOut = () => {
    setMouseOver(false);
  };
  const isMouseOver = () => {
    setMouseOver(true);
  };
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count > 0)
      axios.get("https://randomuser.me/api/?results=1").then(res => {
        const { name, email } = res.data.results[0];
        setContact({
          fName: name.first,
          lName: name.last,
          email: email
        });
        console.log(name.first);
      });
  }, [count]);

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>

      <input name="fName" placeholder={contact.fName} />
      <input name="lName" placeholder={contact.lName} />
      <input name="email" placeholder={contact.email} />
      <button
        type="button"
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onMouseOver={isMouseOver}
        onMouseOut={isMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
