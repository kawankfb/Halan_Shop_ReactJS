import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"




const ProductCard = (props) => {

    let name = props.name;
    let price = props.price;
    let id = props.id;

    return (
      <div className="product-card">

          <div className="picture-placeholder">
            <img className="product-image" src={process.env.PUBLIC_URL +"/images/halan_shop.png"} alt="product picture"/>
          </div>
          <div className="name-placeholder">
            <p className="product-name">{name}</p>
          </div>
          <div className="price-placeholder">
            <p className="product-price">{price}</p>
          </div>
      </div>
    );
  }

export default ProductCard