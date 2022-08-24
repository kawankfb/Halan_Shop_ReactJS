import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoriesPage.css";

const CategoriesPage = (props) => {
    let { categoryId } = useParams();
    if (categoryId==null)
    {
        categoryId=0;
    }

    const[categoriesArray, setCategoriesArray]= useState([]);

    useEffect(() => {
        getAllCategories();
   }, []);

    const getAllCategories = () =>{
        axios.get("http://127.0.0.1:80/api/categories", {
          })
          .then(function (response) {
            setCategoriesArray(response.data);
            console.log(response);
          })
          .catch(function (error) {
            setCategoriesArray([{
              "id": 1,
              "name": "ارایشی و بهداشتی",
          },{
            "id": 2,
            "name": "پوشیدنی ها",
        },{
          "id": 3,
          "name": "لوازم خانگی",
      },{
        "id": 4,
        "name": "کالاهای دیجیتال",
    },{
      "id": 15,
      "name": "ابزار",
  }]);
          })
          .then(function () {
            // always executed
          });
    }

return (
    <div className="category-page-div">
        <div className="categories-list-ul">
        {categoriesArray.map(category=><div className="category-card-li"><CategoryCard name ={category.name} id={category.id}/></div>)}
        </div>
    </div>
    
);
}

export default CategoriesPage