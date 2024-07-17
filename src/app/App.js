'use client'
import Top from './Top.js';
import Middle from './Middle.js';
import Bottom from './Bottom.js';
import './styles.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

//washroom
import { BiMaleFemale, BiFemale, BiMale } from 'react-icons/bi';
import { FaFemale, FaMale, } from 'react-icons/bi';

//food
import { GrCafeteria } from 'react-icons/gr';
import { IoCafe, IoFastFood } from 'react-icons/io5';
import { LuGlassWater } from 'react-icons/lu';
import { MdWaterDrop, MdEmojiFood } from 'react-icons/md';
import { GiVendingMachine } from 'react-icons/gi';
import { PiBowlFoodFill, PiBowlFoodDuotone, } from 'react-icons/gi';

//exits
import { FaStairs, FaElevator } from 'react-icons/fa6';
import { MdOutlineStairs, MdStairs, MdElevator, MdOutlineElevator } from 'react-icons/md';
import { GrElevator } from 'react-icons/gr';
import { Gi3dStaris, GiStairs } from 'react-icons/gi';
import { RxExit } from 'react-icons/rx';
import { ImExit } from 'react-icons/im';
import { IoExit } from 'react-icons/io';

//seating areas
import { MdChair, MdOutlineChair } from 'react-icons/md';
import { PiChairBold, PiChair } from 'react-icons/pi';
//accessibility
import { PiWheelchairmotion } from 'react-icons/pi';
//roooms
import { IoText } from 'react-icons/io5';
import { IoTextSharp } from 'react-icons/io5';

//pins
import { IoMdPin } from 'react-icons/io';
import { MdLoationPin } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';

//arrows (eg for exits, or pins)
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

export default function App() {

    const [buttonInfo, setButtonInfo] = useState([
        {
            name: "room",
            icon: <IoTextSharp style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
        {
            name: "washroom",
            icon: <BiMaleFemale style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
        {
            name: "food",
            icon: <IoCafe style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
        {
            name: "transport",
            icon: <FaStairs style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
        {
            name: "seating",
            icon: <MdChair style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
    ]);
    const [adminButtonInfo, setAdminButtonInfo] = useState([
        {
            name: "room",
            icon: <IoTextSharp style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
        {
            name: "washroom",
            icon: <BiMaleFemale style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
        {
            name: "food",
            icon: <IoCafe style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
        {
            name: "transport",
            icon: <FaStairs style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
        {
            name: "seating",
            icon: <MdChair style={{pointerEvents: 'none'}}/>,
            isPressed: false,
        },
    ]);

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
    
    const [showMode, setShowMode] = useState([]);
    const [addMode, setAddMode] = useState([]);
    const [mode, setMode] = useState({});

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
                <Top 
                    isPressed={isPressed} 
                    setIsPressed={setIsPressed} 
                    mode={mode}
                    setMode={setMode}
                    buttonInfo={buttonInfo}
                    setButtonInfo={setButtonInfo}
                    adminButtonInfo={adminButtonInfo}
                    setAdminButtonInfo={setAdminButtonInfo}
                >
                </Top>
                <Middle isPressed={isPressed}>
                </Middle>
                <Bottom>
                    {JSON.stringify(mode)}
                </Bottom>
                <div className="border-top"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
                <div className="border-right"></div>
            </motion.div>
        </>
    );
}
