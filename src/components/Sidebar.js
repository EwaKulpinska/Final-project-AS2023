import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Settings from "./Settings";
import { useState } from "react";

export default function Sidebar({ links, close }) {
  const location = useLocation();
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <div className="sidebar">
        {links.map((link) => (
          <Link
            to={link.path}
            className={
              location.pathname === link.path
                ? "sidebar-link active"
                : "sidebar-link"
            }
            key={link.name}>
            <FontAwesomeIcon icon={link.icon} />
            {link.name}
          </Link>
        ))}
        <div
          onClick={() => setShowSettings(!showSettings)}
          className="settings-btn-sidebar">
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
      </div>
    </>
  );
}
