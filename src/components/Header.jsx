import { Link } from "react-router-dom";
import { AiFillBug } from "react-icons/ai";
import Sidebar from "./Sidebar";
import "./header.css";
export default function Header() {
  return (
    <div className="head">
      <Link to="/">
        <h1>
          <Sidebar />
          <span> Mega</span>
        </h1>
      </Link>
      <Link to="/">Home</Link>
    </div>
  );
}
