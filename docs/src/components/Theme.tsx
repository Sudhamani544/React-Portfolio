import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";

import "./Theme.css";
import { ThemeContext } from "../context";

const Theme = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <div className="toggle">
      <LightModeIcon sx={{ color: "yellow" }} />
      <DarkModeIcon sx={{ color: "yellow" }} />
      <div className="toggle__button" onClick={onClick}></div>
    </div>
  );
};

export default Theme;
