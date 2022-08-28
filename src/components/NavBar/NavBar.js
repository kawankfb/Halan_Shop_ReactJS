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
            <div className="nav-bar-left-side">
                
            <Link to="/" className="site-logo">
             <img className="NavBarLogo" src={logo} alt="logo"/>
            </Link>

            <Link to="/basket" className="basket-button">
            <img className="basket-button-icon" src={process.env.PUBLIC_URL +"/icons/shopping-cart-icon.svg"} alt="logo"/>
            </Link>
            </div>
      <ul className="NavBarUL">
      <CustomLink to="/">صفحه اصلی</CustomLink>
        <CustomLink to="/categories">دسته بندی</CustomLink>
        <CustomLink to="/contact_us">تماس با ما</CustomLink>
        <CustomLink to="/about_us">درباره ما</CustomLink>
        <CustomLink to="/sign_in">ورود</CustomLink>
        <CustomLink to="/sign_up">ثبت نام</CustomLink>
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
        <CustomLink to="/">صفحه اصلی</CustomLink>
        <CustomLink to="/categories">دسته بندی</CustomLink>
        <CustomLink to="/contact_us">تماس با ما</CustomLink>
        <CustomLink to="/about_us">درباره ما</CustomLink>
        <CustomLink to="/sign_in">ورود</CustomLink>
        <CustomLink to="/sign_up">ثبت نام</CustomLink>
        <CustomLink to="/basket">سبد خرید</CustomLink>
        </nav>
        <div className="nav-bar-left-side">
                
                <Link to="/" className="site-logo">
                 <img className="NavBarLogo" src={logo} alt="logo"/>
                </Link>
    
                <Link to="/basket" className="basket-button">
                <img className="basket-button-icon" src={process.env.PUBLIC_URL +"/icons/shopping-cart-icon.svg"} alt="logo"/>
                </Link>
                </div>
        
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