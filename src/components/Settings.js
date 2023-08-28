import { useState, useEffect } from "react";

export default function Settings() {
  const [settings, setSettings] = useState();
  const [primaryColor, setPrimaryColor] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  function changeColor(i) {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
    localStorage.setItem("color", _settings["--primary-color"]);
  }

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];

  return (
    <div>
      <div className="section disp-block">
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              className="option light"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
