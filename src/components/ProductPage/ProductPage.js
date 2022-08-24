import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = (props) => {
    
    let { productId } = useParams();


    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = process.env.PUBLIC_URL+"/images/halan_shop.png";
      };


return (
    <div className="product-page">
        <div className="images-and-abstract">

        <div className="images-div">
                <img className="preview-image"  onError={imageOnErrorHandler} src={process.env.REACT_APP_API_URL +"products-preview-image/"+productId} alt="product picture"/>
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