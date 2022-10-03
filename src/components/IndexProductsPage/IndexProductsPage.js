import React, { useEffect, useState } from "react";
import "./IndexProductsPage.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const IndexProductsPage = (props) => {

    const { search } = useLocation();
    let query = React.useMemo(() => new URLSearchParams(search), [search]);
    let sort_by=query.get("sort_by");
    let page=query.get("page");

    const[mobileMode, setMobileMode]= useState(false);

    useEffect(()=>{
        if(window.innerWidth > 767){
            setMobileMode(false);
        }
        else if(window.innerWidth <= 767){
            setMobileMode(true);
        }
    },[]);

    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth > 767){
                setMobileMode(false);
            }
            else if(window.innerWidth <= 767){
                setMobileMode(true);
            }
        };
        window.addEventListener('resize',handleResize);

        return ()=> {
            window.removeEventListener('resize',handleResize);
        }

    },[]);


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


    if(mobileMode)
        return (
            <div className="index-page-container">
            <div className="filter-bar">
                <div className="filter-bar-button">
                    <h3 className="filter-bar-button-text"> فیلتر</h3>
                    <img className="filter-bar-button-icon" src={process.env.PUBLIC_URL +"/icons/left-arrow.svg"}></img>
                </div>


                <div className="filter-bar-button">
                    <h3 className="filter-bar-button-text"> ترتیب</h3>
                    <img className="filter-bar-button-icon" src={process.env.PUBLIC_URL +"/icons/left-arrow.svg"}></img>
                </div>
            </div>
            
            <div className="products-index-div">
        <ul className="products-index-ul">
            {productsArray.map(product=><li className="products-index-card-li"><ProductCard name ={product.name} price={product.current_price} id={product.id}/></li>)}
        </ul>

      
        </div>


            </div>
           

        );
    else
        return (
            <div className="index-page-container">
                <div className="filter-menu-div">

                </div>
                <div className="products-index-div">
        <ul className="products-index-ul">
            {productsArray.map(product=><li className="products-index-card-li"><ProductCard name ={product.name} price={product.current_price} id={product.id}/></li>)}
        </ul>

      
        </div>
            </div>
        );
}

export default IndexProductsPage