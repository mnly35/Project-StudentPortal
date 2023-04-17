import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="ul-nav">
        <li>
          <NavLink className="homepage" to="/">
            HomePage
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
