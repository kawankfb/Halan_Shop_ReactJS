import React from "react";
import NavBar from "./NavBar/NavBar";
import { Route, Routes } from "react-router-dom"
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";
import ContactPage from "./ContactPage/ContactPage";
import './App.css'

const App = () =>{
  return (
    <div>
        <NavBar/>
        <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact_us" element={<ContactPage />} />
          <Route path="/about_us" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  )
  }
  export default App;