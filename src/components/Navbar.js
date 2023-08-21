import { useState } from "react";

export default function Navbar() {
  const [showSidebar, setShowSitebar] = useState(false);

  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        F<span>oo</span>diesHub
      </a>
      <div className="nav-links">
        <a href="#!" className="active">
          Home
        </a>
        <a href="#!">Recipies</a>
        <a href="#!">Settings</a>
      </div>
      <div
        onClick={() => setShowSitebar(!showSidebar)}
        className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
