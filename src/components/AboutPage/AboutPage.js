import React from "react";
import "./AboutPage.css";

const AboutPage = (props) => {

    function getAbouts(){
        const abouts =[
            {
                text: "halan",
                imageSrc:process.env.PUBLIC_URL +"/logo.png",
                alt:"halan"},
            {
                text: "kawan",
                imageSrc:process.env.PUBLIC_URL +"/images/kawan.jpeg",
                alt:"kawan"},
            {
                text: "afshin",
                imageSrc:process.env.PUBLIC_URL +"/images/afshin.jpg",
                alt:"afshin"}
        ];
        return abouts;
    }

    
return (
    <div>
        <ul className="about-ul">
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

        <img className="description-image" src={imageSrc} alt={alt}/>

            <p className="description-text">
                {text}
            </p>

            
        </div>
      </li>
    )
  }

export default AboutPage