import React from "react";
import "./SignInPage.css";

const SignInPage = (props) => {

function handleSignIn(){

}

    return (
    <div>
    <form onSubmit={handleSignIn} >
        <input type="text" value="Email or Phone Number">
        </input>
    </form>
    </div>
    
);
}

export default SignInPage