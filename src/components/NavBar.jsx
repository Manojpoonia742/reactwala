import React from "react";
import { Link } from "react-router-dom";
import "../styles/medium/Navbar.css";

const NavBar = () => {
  const icons = [
    {
      icon: "home",
      link: "/",
    },
    {
      icon: "search",
      link: "/search",
    },
    {
      icon: "settings",
      link: "/settings",
    },
    {
      icon: "menu",
      link: "/menu",
    }
  ];
  return (
    <>
      <div className="container">
        <ul>
          {icons.map((icon) => {
            return (
              <li>
              <Link to={icon.link}>
                <span className="material-symbols-outlined">{icon.icon}</span> 
              </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
