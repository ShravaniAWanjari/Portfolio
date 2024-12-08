import React, { useState, useEffect } from "react";
import AnimatedText from "../Components/animated-text";
import "./LandingPage.css";
import Timeline from './timeline';

const timelineItems = [
    {
        date: 'Aug 2023 - Present',
        title: 'Intern | AI Research Center - Woxsen University',
        description: 'Appointed as intern to research on Brain-machine interaction utilizing EEG (Electroencephalography). Engaged in research studying the effects of music on brain waves. Writing a paper on Effects of music on Human Brain utilizing Deap Dataset.'
    },
    {
        date: 'Dec 2023 - Present',
        title: 'User Experience Design Intern | Ozibook',
        description: 'Appointed as intern to research on Brain-machine interaction utilizing EEG (Electroencephalography). Engaged in research studying the effects of music on brain waves. Writing a paper on Effects of music on Human Brain utilizing Deap Dataset.'
    },
    {
        date: 'Aug 2023 - Present',
        title: 'Intern | AI Research Center - Woxsen University',
        description: 'Appointed as intern to research on Brain-machine interaction utilizing EEG (Electroencephalography). Engaged in research studying the effects of music on brain waves. Writing a paper on Effects of music on Human Brain utilizing Deap Dataset.'
    }
]

const LandingPage = () => {
    return (
        <>
            {/* Landing Page Content */}

                <div className="Landing-page">
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

                <div className="Menu-page">
                    <div className="menu-content">
                        <ul className="menu-list">
                            <li>About</li>
                            <li>Experience</li>
                            <li>Projects</li>
                            <li>Academia</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="About-Page">
                <h1 className="about-title">About me</h1>
                <p className="about-content">I am a third year B.Tech student who took up cse core cuz she didn't have any particular field she wanted to major in. Fast Forward 3 years later, still don't know what major fits me the best. Not a good thing but I will fix it with my MASTERMIND PLAN by Feb... Stay Tuned✌🏻</p>
                <img className="about-image" src="#" alt="place an image here"></img>
                </div>
                <div className="Experience">
                    <h1>Experience</h1>
                    <Timeline items={timelineItems} />
                </div>

        </>
    );
};

export default LandingPage;
