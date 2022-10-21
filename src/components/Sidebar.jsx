import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillBug } from "react-icons/ai";

import "./sidebar.css";

export default function Siddebar() {
  const [toggle, setToggle] = useState(false);

  const change = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <div className="come-from-side">
          <div className="fix-all-content">
            <div className="close-btn">
              <span onClick={change}>X</span>
            </div>
            <div className="contentOfSidebar">
              <Link to="/todo">Todo</Link>
            </div>
            <div className="contentOfSidebar">
              <Link to="/quotes">Quotes</Link>
            </div>
            <div className="contentOfSidebar">
              <Link to="/tip-calculator">Tip-calculator</Link>
            </div>
          </div>
        </div>
      ) : (
        <AiFillBug onClick={change} />
      )}
    </>
  );
}
