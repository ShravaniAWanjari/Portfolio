import React from "react";
import AnimatedText from "../Components/animated-text";
import "./LandingPage.css"

const LandingPage = () => {
    return(
        <div className="landing-page">
            <div className="intro-text">
                <h1>Hi</h1>
                <h1>I am Shravani.</h1>
                <AnimatedText />
            </div>
            <img 
            src="src/assets/cat-with-message.png" 
            alt="Corner Cat" 
            className="cat-image" 
            />
        </div>
    );
}

export default LandingPage;