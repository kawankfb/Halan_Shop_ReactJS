import React, { useEffect, useState }  from "react";
import "./HomePage.css";
import axios from 'axios';
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const HomePage = (props) => {

    const[productsArray, setProductsArray]= useState([]);

    useEffect(() => {
        getAllProducts();
   }, []);

    const getAllProducts = () =>{
        axios.get(process.env.REACT_APP_API_URL +"products", {
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
        <div className="section-title">پرفروش‌ترین ها</div>
        <div className="products-list-div">
        <ul className="products-list-ul">
            {productsArray.map(product=><li className="product-card-li"><ProductCard name ={product.name} price={product.current_price} id={product.id}/></li>)}
        </ul>

        <Link className="products-list-index-button-container" to="/index_products?sort_by=most_popular&page=1">
            <img className="products-list-index-button" src={process.env.PUBLIC_URL +"/icons/left-arrow.svg"} alt="index" />
          </Link>
        </div>
        

        <div className="section-title">جدید‌ترین ها</div>

        <div className="products-list-div">
        <ul className="products-list-ul">
            {productsArray.map(product=><li className="product-card-li"><ProductCard name ={product.name} price={product.current_price} id={product.id}/></li>)}
        </ul>

      
          <Link className="products-list-index-button-container" to="/index_products?sort_by=newest&page=1">
            <img className="products-list-index-button" src={process.env.PUBLIC_URL +"/icons/left-arrow.svg"} alt="index" />
          </Link>

        </div>
        
    </div>
    
);
}

export default HomePage