import React from "react";
import { Link } from "react-router-dom";

export default function NavB() {
  const logOut = () => {
    localStorage.clear();
  };

  const Style = {
    color: 'black',
    textDecoration: 'none'
}
  return (
    <nav>
      <Link style={Style} st to="/">Home</Link>
      <Link style={Style} to="/contact">Contact</Link>
      <Link style={Style} onClick={logOut} to="/logout">
        logout
      </Link>
    </nav>
  );
}
