import React from "react";
import { Link, NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the
// appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className="nav-link"
              activeClassName="active"
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/linkedIn"
              className="nav-link"
              activeClassName="active"
            >
              LinkedIn
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/github" className="nav-link" activeClassName="active">
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
