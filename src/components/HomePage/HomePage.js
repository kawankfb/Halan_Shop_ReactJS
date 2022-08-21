import React, { useEffect, useState }  from "react";
import "./HomePage.css";
import axios from 'axios';
import ProductCard from "../ProductCard/ProductCard";

const HomePage = (props) => {

    const[productsArray, setProductsArray]= useState([]);

    useEffect(() => {
        getAllProducts();
   }, []);

    const getAllProducts = () =>{
        axios.get("http://127.0.0.1:80/api/products", {
            params: {
              page:1
            }
          })
          .then(function (response) {
            setProductsArray(response.data.data.list);
            console.log(response);
          })
          .catch(function (error) {
            setProductsArray([{
              "id": 11,
              "name": "black afgan 1",
              "price": 15000000,
              "current_price": 13500000,
              "originality": "original"
          },{
            "id": 12,
            "name": "black afgan 2",
            "price": 16000000,
            "current_price": 14500000,
            "originality": "original"
        },{
          "id": 13,
          "name": "black afgan 3",
          "price": 17000000,
          "current_price": 15500000,
          "originality": "original"
      },{
        "id": 14,
        "name": "blue channel",
        "price": 1000000,
        "current_price": 900000,
        "originality": "original"
    },{
      "id": 15,
      "name": "prestige",
      "price": 100000,
      "current_price": 100000,
      "originality": "original"
  }]);
          })
          .then(function () {
            // always executed
          });
    }
    
return (
    <div>
        <h1 className="description-text">
            Hi, this is our home page
        </h1>
        <ul className="products-list">
            {productsArray.map(product=><li className="product-card-li"><ProductCard name ={product.name} price={product.current_price}/></li>)}
        </ul>

        <ul className="products-list">
            {productsArray.map(product=><li className="product-card-li"><ProductCard name ={product.name} price={product.current_price}/></li>)}
        </ul>
    </div>
    
);
}

export default HomePage