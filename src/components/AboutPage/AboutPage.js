import React from "react";
import "./AboutPage.css";

const AboutPage = (props) => {

    function getAbouts(){
        const abouts =[
            {
                text: "halan",
                imageSrc:"/logo.png",
                alt:"halan"},
            {
                text: "kawan",
                imageSrc:"/logo.png",
                alt:"kawan"},
            {
                text: "afshin",
                imageSrc:"/logo.png",
                alt:"afshin"}
        ];
        return abouts;
    }

    
return (
    <div>
        <ul>
            {getAbouts().map((card,index) => {
                console.log(card);
  return (
      <DescriptionDiv text={card.text} imageSrc={card.imageSrc} alt={card.alt} index={index} />
      
  ) 
})}
        </ul>
    </div>
    
);
}

function DescriptionDiv({text,imageSrc, alt,index, ...props }) {
    return (
      <li className="description-card">
        <div className={index%2===0? "even-card" : "odd-card"}>
            <p >
                {text}
            </p>
            
        </div>
      </li>
    )
  }

export default AboutPage