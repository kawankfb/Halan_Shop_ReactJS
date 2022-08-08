import React, {useState} from "react";
import "./CountButton.css";

const CountButton = (props) => {

    const [currentCount, setCurrentCount] = useState(0)

    function incrementCount(){
        setCurrentCount(currentCount + props.incrementBy)
    }

    return (
    <div>
        <button onClick={incrementCount}>+{props.incrementBy}</button>
        <div>
            <h3>count is: </h3>
            <h3 className="currentCountDisplay">{currentCount}</h3>
        </div>
    </div>
    )
}

export default CountButton