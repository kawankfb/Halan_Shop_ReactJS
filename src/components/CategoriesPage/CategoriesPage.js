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
          })
          .then(function (response) {
              setCategoriesArray(response.data.data);
              setCurrentCategoriesArray(categoriesArray.filter(category=>category.level===0))
          })
          .catch(function (error) {
            setCategoriesArray([{
              "level": 0,
              "lineage": "App\\Models\\HomeAppliances",
              "id": 1,
              "name": "Home applliances",
            },{
              "level": 1,
              "lineage": "App\\Models\\HomeAppliances\\Electrical",
              "id": 2,
              "name": "Electrical",
            },{
              "level": 2,
              "lineage": "App\\Models\\HomeAppliances\\Electrical\\Juicer",
              "id": 3,
              "name": "Juicer",
            }]);
            setCurrentCategoriesArray(categoriesArray.filter(category=> category.level===0))
          })
          .then(function () {
            // always executed
          });
    }

    function handleCategoryClick(event){
      let currentLevel =parseInt(event.currentTarget.dataset.level);
      let currentId = parseInt(event.currentTarget.dataset.id);
      let currentClass = event.currentTarget.dataset.lineage;
      console.log(categoriesArray);
      setCurrentCategoriesArray(categoriesArray.filter(category=> ((category.level===currentLevel+1) && (category.lineage.includes(currentClass)))));
      console.log(categoriesArray);

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