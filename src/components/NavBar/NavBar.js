import React, { useEffect, useState } from "react";
import "./NavBar.css";

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
        <button onClick={goToHomePage}>Register</button>
        <button onClick={goToHomePage}>Home</button>
        <button onClick={goToHomePage}>Categories</button>
        <button onClick={goToHomePage}>Contact us</button>
        <button onClick={goToHomePage}>About us</button>
        <img className="NavBarLogo" src="/logo.png" alt="logo"/>
        </nav>
    </div>
    );
    else 
    return (
        <div className="mobileNavDiv">
        <img className="mobileNavBarMenu" src="/icons8-menu.svg" alt="menu" onClick={openMobileNavBar}/>
        <nav className="mobileNavBar" style={{
    display:mobileNavOpen ? "inline" : "none",
    animation:mobileNavOpen ? "slide 0.5s forwards" : "none",
  }}>   <img className="mobileNavBarClose" src="/icons/white-close-icon.svg" alt="close" onClick={closeMobileNavBar}/>
        <button className="mobileNavBarButton" onClick={goToHomePage}>Register</button>
        <button className="mobileNavBarButton" onClick={goToHomePage}>Home</button>
        <button className="mobileNavBarButton" onClick={goToHomePage}>Categories</button>
        <button className="mobileNavBarButton" onClick={goToHomePage}>Contact us</button>
        <button className="mobileNavBarButton" onClick={goToHomePage}>About us</button>
        </nav>
        <img className="mobileNavBarLogo" src="/logo.png" alt="logo"/>
    </div>
    )
}

export default NavBar