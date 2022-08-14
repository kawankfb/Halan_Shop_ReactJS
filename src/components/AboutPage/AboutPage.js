import React, { useEffect, useState } from "react";
import "./AboutPage.css";
import { useNavigate } from "react-router-dom"
import NavBar from "../NavBar/NavBar";

const AboutPage = (props) => {
return (
    <div>
<NavBar/>
    <div>
        <h1>
            Hi, this is our about page
        </h1>
    </div>
    </div>
    
);
}

export default AboutPage