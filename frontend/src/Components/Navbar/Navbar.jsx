import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaHome, FaUtensils, FaShoppingCart } from 'react-icons/fa'; // Importing icons

export default function Navbar({ toggleCart, isCartOpen }) {
  const location = useLocation();

  return (
    <div className="nav-dev" id="home">
      <nav className="nav">
        <ul>
          <li>
            <ScrollLink id="link" to="home" smooth={true} duration={500} className="nav-link">
              <FaHome className="icon" />
            </ScrollLink>

          </li>
        </ul>
        <ul>
          <li>
            <ScrollLink id="link" to="menu" smooth={true} duration={500} className="nav-link">
              <FaUtensils className="icon" />
            </ScrollLink>

          </li>
        </ul>
        <ul>
          <li>
            <Link onClick={toggleCart} className="nav-link">
              <FaShoppingCart className="icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
