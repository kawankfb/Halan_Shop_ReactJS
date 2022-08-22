import React from "react";
import "./AboutPage.css";

const AboutPage = (props) => {

    function getAbouts(){
        const abouts =[
            {
                text: "halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan halan ",
                imageSrc:process.env.PUBLIC_URL +"/images/halan_shop.png",
                alt:"halan"},
            {
                text: "kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan kawan ",
                imageSrc:process.env.PUBLIC_URL +"/images/kawan.jpeg",
                alt:"kawan"},
            {
                text: "afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin afshin ",
                imageSrc:process.env.PUBLIC_URL +"/images/afshin.jpg",
                alt:"afshin"}
        ];
        return abouts;
    }

    
return (
    <div className="about-page-div">
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

        <img className={index%2===0? "even-description-image" : "odd-description-image"} src={imageSrc} alt={alt}/>

            <div className={index%2===0? "even-description-text-div" : "odd-description-text-div"}>
                <p className={index%2===0? "even-description-text-paragraph" : "odd-description-text-paragraph"}>{text}</p>
            </div>

            
        </div>
      </li>
    )
  }

export default AboutPage