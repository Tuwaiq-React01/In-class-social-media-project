import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item>
          <Link to="/" className="link">
            Home
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link onClick={logOut}>Logout</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
