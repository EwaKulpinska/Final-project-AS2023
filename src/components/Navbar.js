import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Settings from "./Settings";
import {
  faHome,
  faList,
  faCog,
  faUtensils,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const location = useLocation();

  const [showSidebar, setShowSitebar] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Meal Plans",
      path: "/mealplan",
      icon: faUtensils,
    },
    {
      name: "About Us",
      path: "/about",
      icon: faAddressCard,
    },
  ];

  function closeSidebar() {
    setShowSitebar(false);
  }

  return (
    <>
      <div className="container navbar ">
        <Link to="/home" className="logo">
          F<span>oo</span>dlum<span>!</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSettings(!showSettings)}
          className="settings-btn">
          <FontAwesomeIcon icon={faCog} />
          <span> </span>
          SETTINGS
          <div
            style={
              showSettings ? { display: "inline-block" } : { display: "none" }
            }
            className="drop-down">
            <Settings />
          </div>
        </div>
        <div
          onClick={() => setShowSitebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
