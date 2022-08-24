import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import logo from './icons/logo.png';
import { Link, useMatch, useResolvedPath } from "react-router-dom"




const ProductCard = (props) => {

    let name = props.name;
    let price = props.price;
    let id = props.id;
    let imageSrc=process.env.REACT_APP_API_URL +"products-preview-image/"+id;



    const imageOnErrorHandler = (event) => {
      event.currentTarget.src = process.env.PUBLIC_URL+"/images/halan_shop.png";
    };

    return (
      
<Link to={"/product/"+id} className="product-card">
          <div className="picture-placeholder">
            <img className="product-image" src={imageSrc} onError={imageOnErrorHandler} alt="product picture"/>
          </div>
          <div className="name-placeholder">
            <p className="product-name">{name}</p>
          </div>
          <div className="price-placeholder">
            <p className="product-price">{price}</p>
          </div>
      </Link>
        
    );
  }

export default ProductCard