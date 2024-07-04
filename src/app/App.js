'use client'
import Top from './Top.js';
import Middle from './Middle.js';
import Bottom from './Bottom.js';
import './styles.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function App() {

    const [isPressed, setIsPressed] = useState(false);

    const [panelsAreHidden, setPanelsAreHidden] = useState(false);
    const hidePanels = (e) => {
        const top = document.getElementsByClassName("top")[0];
        const bottom = document.getElementsByClassName("bottom")[0];
        const button = document.getElementsByClassName("hide_button_top_panel")[0];

        if (panelsAreHidden) {
            top.style.top = "50px";
            bottom.style.bottom = "50px";
            button.innerHTML = "hide panels";
        } else {
            top.style.top = "-500px";
            bottom.style.bottom = "-500px";
            //top.style.top = "1000px";
            //bottom.style.bottom = "1000px";
            button.innerHTML = "show panels";
        }
        setPanelsAreHidden( prev => !prev);

    }
    const hidePanels2 = (e) => {
        const top = document.getElementsByClassName("top")[0];
        const bottom = document.getElementsByClassName("bottom")[0];
        const button = document.getElementsByClassName("hide_button_top_panel")[0];
        console.log('clicked!');

        if (panelsAreHidden) {
            top.classList.remove("invisible");
            bottom.classList.remove("invisible");
            top.classList.add("visible");
            bottom.classList.add("visible");
            button.innerHTML = "hide panels";
        } else {
            top.classList.add("invisible");
            bottom.classList.add("invisible");
            top.classList.remove("visible");
            bottom.classList.remove("visible");
            button.innerHTML = "show panels"; 
        }
        setPanelsAreHidden( prev => !prev);
    }

    return (
        <>
            <motion.div 
                className="manual-viewport prevent_select"
                //drag
            >
                {/*
                <button className="toggle_button hide_button_top_panel" id="TESTING" onClick={hidePanels2}>
                */}
                <button className="hide_button_top_panel" id="TESTING" onClick={hidePanels2}>
                    hide panels
                </button> {/*for hide button*/}
                <Top isPressed={isPressed} setIsPressed={setIsPressed}></Top>
                <Middle isPressed={isPressed}></Middle>
                <Bottom></Bottom>
                <div className="border-top"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
                <div className="border-right"></div>
            </motion.div>
        </>
    );
}
