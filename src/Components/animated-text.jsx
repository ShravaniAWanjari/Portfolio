import React from "react";
import "./animated-text.css";

const AnimatedText = () => {
  return (
    <div className="scrolling-words-container">
      <span>I work on</span>
      <div className="scrolling-words-box">
        <ul>
          <li>User Interactions</li>
          <li>Apps</li>
          <li>Websites</li>
          <li>User Interactions</li>
        </ul>
      </div>
    </div>
  );
};

export default AnimatedText;