import React , {useState, useEffect} from "react";

import "./animated-text.css";

const AnimatedText = () =>{
    const [currentText, setCurrentText] = useState("Apps");
    const texts = ["Apps", "Websites", "User Interactions"];

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setCurrentText(texts[index]);
        } , 2000);

        return () => clearInterval(interval);
    }, []);

    return( 
    <div className="league-spartan">
        <span className="text-slide">I work on {currentText}</span>
    </div>
    );
};

export default AnimatedText;