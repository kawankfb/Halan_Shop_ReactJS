import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoriesPage.css";

const CategoriesPage = () => {


    const[categoriesArray, setCategoriesArray]= useState([]);

    const[currentCategoriesArray, setCurrentCategoriesArray]= useState([]);

    useEffect(() => {
        getAllCategories();
   }, []);

    const getAllCategories = () =>{
        axios.get(process.env.REACT_APP_API_URL +"categories", {
          timeout:10000 ,
          })
          .then(function (response) {
              setCategoriesArray(response.data.data);
              setCurrentCategoriesArray(response.data.data.filter(category=>category.level===0));
          })
          .catch(function (error) {
            alert("Please refresh your page")
          })
          .then(function () {
            // always executed
            
          });
          

    }

    function handleCategoryClick(event){
      let currentLevel =parseInt(event.currentTarget.dataset.level);
      let currentId = parseInt(event.currentTarget.dataset.id);
      let currentClass = event.currentTarget.dataset.lineage;
      setCurrentCategoriesArray(categoriesArray.filter(category=> ((category.level===currentLevel+1) && (category.lineage.includes(currentClass)))));

    }

return (
    <div className="category-page-div">
        <div className="categories-list-ul">
        {currentCategoriesArray.map(category=><div data-id={category.id} data-lineage={category.lineage} data-level ={category.level} onClick={handleCategoryClick} className="category-card-li"><CategoryCard name ={category.name} id={category.id}/></div>)}
        </div>
    </div>
    
);
}

export default CategoriesPage