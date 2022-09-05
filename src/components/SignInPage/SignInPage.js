import React, { useState } from "react";
import "./SignInPage.css";

const SignInPage = (props) => {


    function handleSignIn(){

    }

    return (
    <div>
    <form onSubmit={handleSignIn} >
        <CustomTextInput></CustomTextInput>
        <CustomTextInput></CustomTextInput>
        <CustomTextInput></CustomTextInput>

    </form>
    </div>
    
);
}



function CustomTextInput({props}) {
    
    const[inputValue, setInputValue]= useState("");

function handleInputValueChange(event){
        setInputValue(event.target.value);
}
    return (
        <input type="text" onChange={handleInputValueChange} value={inputValue}></input>
    )
  }
export default SignInPage