import React, { useEffect, useState }  from "react";
import "./HomePage.css";
import axios from 'axios';

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
            setProductsArray([]);
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
        <ul>
            {productsArray.map(product=><li>{product.name}</li>)}
        </ul>
    </div>
    
);
}

export default HomePage