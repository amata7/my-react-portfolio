import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the
// appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light">
      <div className="bg-danger border border-danger rounded rounded-2 navbar-collapse collapse">
        <ul className="navbar-nav">
          <li className="nav-item navbar-styles">
            <NavLink
              to="/"
              className="text-light nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item navbar-styles">
            <NavLink
              to="/linkedIn"
              className="text-light nav-link"
              activeClassName="active"
            >
              LinkedIn
            </NavLink>
          </li>
          <li className="nav-item navbar-styles">
            <NavLink
              to="/github"
              className="text-light nav-link"
              activeClassName="active"
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
