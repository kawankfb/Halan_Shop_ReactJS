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
        if(window.innerWidth > 767){
            setShowMobileNavMenu(false);
        }
        else if(window.innerWidth < 767){
            setShowMobileNavMenu(true);
        }
    },[]);

    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth > 767){
                setMobileNavOpen(false);
                setShowMobileNavMenu(false);
            }
            else if(window.innerWidth < 767){
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
      <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/categories">Categories</CustomLink>
        <CustomLink to="/contact_us">Contact Us</CustomLink>
        <CustomLink to="/about_us">About Us</CustomLink>
        <CustomLink to="/sign_in">Sign in</CustomLink>
        <CustomLink to="/sign_up">Sign up</CustomLink>
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
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/categories">Categories</CustomLink>
        <CustomLink to="/contact_us">Contact Us</CustomLink>
        <CustomLink to="/about_us">About Us</CustomLink>
        <CustomLink to="/sign_in">Sign in</CustomLink>
        <CustomLink to="/sign_up">Sign up</CustomLink>
        </nav>
        <Link to="/" className="site-logo">
        <img className="mobileNavBarLogo" src={logo} alt="logo"/>
      </Link>
        
    </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
        <Link className={isActive ? "nav-button-active" : "nav-button"} to={to} {...props}>
          <text className="nav-button-link-text" >
          {children}
          </text>
        </Link>
    )
  }

export default NavBar