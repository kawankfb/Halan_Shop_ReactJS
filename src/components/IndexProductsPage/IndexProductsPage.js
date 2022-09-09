import React, { useEffect, useState } from "react";
import "./IndexProductsPage.css";
import { useLocation } from "react-router-dom";

const IndexProductsPage = (props) => {

    const { search } = useLocation();
    let query = React.useMemo(() => new URLSearchParams(search), [search]);
    let sort_by=query.get("sort_by");
    let page=query.get("page");

    const[mobileMode, setMobileMode]= useState(false);

    useEffect(()=>{
        if(window.innerWidth > 719){
            setMobileMode(false);
        }
        else if(window.innerWidth <= 719){
            setMobileMode(true);
        }
    },[]);

    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth > 719){
                setMobileMode(false);
            }
            else if(window.innerWidth <= 719){
                setMobileMode(true);
            }
        };
        window.addEventListener('resize',handleResize);

        return ()=> {
            window.removeEventListener('resize',handleResize);
        }

    },[]);
    if(mobileMode)
        return (
            <div className="index-page-container">
            <div className="filter-bar">
                <div className="filter-bar-button">
                    <h3 className="filter-bar-button-text"> filter</h3>
                    <img className="filter-bar-button-icon" src={process.env.PUBLIC_URL +"/icons/left-arrow.svg"}></img>
                </div>


                <div className="filter-bar-button">
                    <h3 className="filter-bar-button-text"> sort by</h3>
                    <img className="filter-bar-button-icon" src={process.env.PUBLIC_URL +"/icons/left-arrow.svg"}></img>
                </div>
            </div>
            </div>
           

        );
    else
        return (
            <div>
                not mobile
            </div>
        );
}

export default IndexProductsPage