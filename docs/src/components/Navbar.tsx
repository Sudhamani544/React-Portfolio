import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__home">
        <Link to={"/"}> Home </Link>
      </div>
      <ul className="navbar_menu">
        <li>
          <Link to={"about"}> About Me</Link>
        </li>
        <li>
          <Link to={"projects"}> Projects</Link>
        </li>
        <li>
          <Link to={"contact"}> Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
