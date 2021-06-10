import React from "react";
import { Link } from "react-router-dom";

export default function NavB() {
  const logOut = () => {
    localStorage.clear();
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link onClick={logOut} to="/logout">
        logout
      </Link>
    </nav>
  );
}
