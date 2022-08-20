import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from './icons/logo.png';
import menuIcon from './icons/icons8-menu.svg';
import closeMenuIcon from './icons/white-close-icon.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom"




const NavBar = (props) => {

    const[mobileNavOpen, setMobileNavOpen]= useState(false);
    const[showMobileNavMenu, setShowMobileNavMenu]= useState(false);

    useEffect(()=>{
        if(window.innerWidth > 719){
            setShowMobileNavMenu(false);
        }
        else if(window.innerWidth < 719){
            setShowMobileNavMenu(true);
        }
    },[]);

    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth > 719){
                setMobileNavOpen(false);
                setShowMobileNavMenu(false);
            }
            else if(window.innerWidth < 719){
                setShowMobileNavMenu(true);
            }
        };
        window.addEventListener('resize',handleResize);

        return ()=> {
            window.removeEventListener('resize',handleResize);
        }

    },[]);

    function goToHomePage(){
        
    }

    function openMobileNavBar(){
        setMobileNavOpen(true);
    }
    function closeMobileNavBar(){
        setMobileNavOpen(false);
    }

    if(!showMobileNavMenu)
    return (
    <div>
        <nav>
        <Link to="/" className="site-logo">
        <img className="NavBarLogo" src={logo} alt="logo"/>
      </Link>
      <ul className="NavBarUL">
        <CustomLink to="/contact_us">Contact Us</CustomLink>
        <CustomLink to="/about_us">About Us</CustomLink>
      </ul>
        </nav>
    </div>
    );
    else 
    return (
        <div className="mobileNavDiv">
        <img className="mobileNavBarMenu" src={menuIcon} alt="menu" onClick={openMobileNavBar}/>
        <nav className="mobileNavBar" style={{
    display:mobileNavOpen ? "inline" : "none",
    animation:mobileNavOpen ? "slide 0.5s forwards" : "none",
  }}>   <img className="mobileNavBarClose" src={closeMenuIcon} alt="close" onClick={closeMobileNavBar}/>
        <button className="mobileNavBarButton" onClick={goToHomePage}>Register</button>
        <button className="mobileNavBarButton" onClick={goToHomePage}>Home</button>
        <button className="mobileNavBarButton" onClick={goToHomePage}>Categories</button>
        <button className="mobileNavBarButton" onClick={goToHomePage}>Contact us</button>
        <button className="mobileNavBarButton" onClick={goToHomePage}>About us</button>
        </nav>
        <img className="mobileNavBarLogo" src={logo} alt="logo"/>
    </div>
    )
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

export default NavBar