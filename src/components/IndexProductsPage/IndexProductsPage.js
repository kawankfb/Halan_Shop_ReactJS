import React from "react";
import "./IndexProductsPage.css";
import { useLocation } from "react-router-dom";

const IndexProductsPage = (props) => {

    const { search } = useLocation();
    let query = React.useMemo(() => new URLSearchParams(search), [search]);
    let sort_by=query.get("sort_by");
    let page=query.get("page");
return (
    <div>
       the chosen sort by is: sort by &quot;{sort_by}&quot; <br/>
       and the page number is: page &quot;{page}&quot; 
    </div>
    
);
}

export default IndexProductsPage