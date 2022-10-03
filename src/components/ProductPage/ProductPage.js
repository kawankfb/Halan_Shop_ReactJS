import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = (props) => {
    
    let { productId } = useParams();
    const[productInfo, setProductInfo]= useState({
        "id": {productId},
        "name": "black afgan 1",
        "description":"this is a description to be shown to the user",
        "originality": "original"
    });

    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = process.env.PUBLIC_URL+"/images/halan_shop.png";
      };

      const getProductInfo = () =>{
        axios.get(process.env.REACT_APP_API_URL +"products/"+{productId}, {
          })
          .then(function (response) {
            setProductInfo(response.data.data);
            console.log(response);
          })
          .catch(function (error) {
            setProductInfo({
              "id": {productId},
              "name": "black afgan 1",
              "description":"this is a description to be shown to the user",
              "originality": "original"
          });
          })
          .then(function () {
            // always executed
          });
    }


    useEffect(() => {
        getProductInfo();
   }, []);

return (
    <div className="product-page">
        <div className="images-and-abstract">

        <div className="images-div">
                <img className="preview-image"  onError={imageOnErrorHandler} src={process.env.REACT_APP_API_URL +"products-preview-image/"+productId} alt="product picture"/>
                <div className="image-indicator-div">
                    
                </div>
                <div className="product-name-div">
                    {productInfo["name"]}
                </div>
            </div>

            <div className="abstract-div">
                
                <ul className="abstract-ul">
                    <li>some info 1</li>
                    <li>some info 2</li>
                    <li>some info 3</li>
                    <li>some info 4</li>
                </ul>
            </div>
            
        </div>
        
    </div>
    
);
}

export default ProductPage