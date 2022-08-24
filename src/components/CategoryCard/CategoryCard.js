import React, { useEffect, useState } from "react";
import "./CategoryCard.css";
import logo from './icons/logo.png';
import { Link, useMatch, useResolvedPath } from "react-router-dom"




const CategoryCard = (props) => {

    let name = props.name;
    let id = props.id;
    let imageSrc=process.env.REACT_APP_API_URL +"category-preview-image/"+id;



    const imageOnErrorHandler = (event) => {
      event.currentTarget.src = process.env.PUBLIC_URL+"/images/halan_shop.png";
    };

    return (
      
<Link to={"/categories/"+id} className="category-card">
          <div className="category-picture-placeholder">
            <img className="category-image" src={imageSrc} onError={imageOnErrorHandler} alt="category picture"/>
          </div>
          <div className="category-name-placeholder">
            <p className="category-name">{name}</p>
          </div>
      </Link>
        
    );
  }

export default CategoryCard