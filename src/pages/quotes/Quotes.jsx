import React from "react";
import { useState, useEffect } from "react";
import "./quotes.css";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#f44336",
  "#ff0000",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
  "#ffd966",
  "#2000e1",
  "#6428e1",
  "#ffaf28",
  "#e10028",
  "#000000",
];

const Quotes = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [val, setVal] = useState(0);
   const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchQ();
  }, []);

  async function fetchQ() {
    setVal(parseInt(Math.random() * 10));
    
     const res2 = await fetch("https://api.adviceslip.com/advice");
    const data2 = await res2.json();
     setAdvice(data2.slip.advice);
    
    
//     for quotes below
    
    
    
    const res = await fetch("https://api.quotable.io/random");
   
    const data = await res.json();

    console.log(data);

    setText(data.content);
    setAuthor(data.author);
    
  }

  return (
  <>  <div
      className="quotes-conatiner"
      style={{ backgroundColor: colors[{ val }] }}
    >
       <div className="quote-box">
          <div className="quote-text">{advice}</div>
      </div>
</div>
    
    
    <div
      className="quotes-conatiner"
      style={{ backgroundColor: colors[{ val }] }}
    >
      <div className="quote-box">
        <div className="quote-text">{text}</div>
        <div className="quote-author">{author}</div>
        <div className="button-container">
          <button className="button" onClick={fetchQ}>
            Click
          </button>
        </div>
      </div>
    </div></>
  );
};

export default Quotes;
