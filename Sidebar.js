import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../assets/images/Logo-size-down.png";
import menu from "../assets/images/menu-arrow.svg";
import { isBrowser } from "react-device-detect";

const Sidebar = () => {
  const [split, setSplit] = useState(true);

  return (
    <nav
      onMouseEnter={() => setSplit(false)}
      onMouseLeave={() => setSplit(true)}
      className={split ? "nav" : "splited"}
    >
      <Link to="/" className="nav-logo__container">
        <img src={Logo} />
      </Link>
      <div
        style={isBrowser ? { display: "none" } : {}}
        onClick={() => setSplit(false)}
        className={split ? "nav-button" : "splited-button"}
      >
        <img src={menu} className="bi bi-list" />
      </div>
      <Link to="/" className={split ? "nav-card" : "splited-card"}>
        <img src="https://img.icons8.com/ios-filled/50/000000/pokeball--v2.png" />
        <span>Inicio</span>
      </Link>
      <Link to="/pokedex" className={split ? "nav-card" : "splited-card"}>
        <img src="https://img.icons8.com/material/50/000000/pokedex.png" />
        <span>Pokédex</span>
      </Link>
      <Link to="/news" className={split ? "nav-card" : "splited-card"}>
        <i className="bi bi-newspaper" />
        <span>Noticias</span>
      </Link>
    </nav>
  );
};

export default Sidebar;
