import React from "react";
import NavBar from "./NavBar/NavBar";
import { Route, Routes } from "react-router-dom"
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";
import ContactPage from "./ContactPage/ContactPage";
import BasketPage from "./BasketPage/BasketPage";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import './App.css'
import Footer from "./Footer/Footer";

const App = () =>{
  return (
    <div className="app-div">
        <NavBar className="nav-bar"/>
        <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact_us" element={<ContactPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/sign_in" element={<SignInPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/about_us" element={<AboutPage />} />
        </Routes>
      </div>
      <div className="footer-div">
        <Footer />
        </div>
    </div>
  )
  }
  export default App;