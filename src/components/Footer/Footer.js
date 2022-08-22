import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from './icons/logo.png';
import menuIcon from './icons/icons8-menu.svg';
import closeMenuIcon from './icons/white-close-icon.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom"




const Footer = (props) => {

  return (
    <div className="footer-div-internal">
      <footer>
        
      </footer>
    </div>
  );
    
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "nav-button-active" : "nav-button"}>
        <Link className="nav-button-link-text" to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Footer