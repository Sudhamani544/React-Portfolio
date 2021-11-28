import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context";

import "./Navbar.css";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="navbar">
      <div className="navbar__home">
        <Link to={"/"} className={`${darkMode ? "bg-dark" : "bg-light"}`}>
          {" "}
          Home{" "}
        </Link>
      </div>
      <ul className="navbar_menu">
        <li>
          <Link to={"about"} className={`${darkMode ? "bg-dark" : "bg-light"}`}>
            {" "}
            About Me
          </Link>
        </li>
        <li>
          <Link
            to={"projects"}
            className={`${darkMode ? "bg-dark" : "bg-light"}`}
          >
            {" "}
            Projects
          </Link>
        </li>
        <li>
          <Link
            to={"contact"}
            className={`${darkMode ? "bg-dark" : "bg-light"}`}
          >
            {" "}
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
