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
    "rgba(232, 67, 147,1.0)",
    "rgb(33, 150, 243)",
    "rgba(250, 152, 58,1.0)",
    "rgba(22, 160, 133,1.0)",
    "rgba(155, 89, 182,1.0)",
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
