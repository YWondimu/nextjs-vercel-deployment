'use client'
import Top from './Top.js';
import Middle from './Middle.js';
import Bottom from './Bottom.js';
import './styles.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

//washroom
import { BiMaleFemale, BiFemale, BiMale } from 'react-icons/bi';
import { FaFemale, FaMale, } from 'react-icons/fa';
import { LiaFemaleSolid, LiaMaleSolid, } from 'react-icons/lia';

//food
import { GrCafeteria } from 'react-icons/gr';
import { IoCafe, IoFastFood, IoWater } from 'react-icons/io5';
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
import { IoExit, IoMdExit } from 'react-icons/io';

//seating areas
import { MdChair, MdOutlineChair } from 'react-icons/md';
import { PiChairBold, PiChair } from 'react-icons/pi';
//accessibility
import { PiWheelchairmotion } from 'react-icons/pi';
//roooms
import { IoText } from 'react-icons/io5';
import { IoTextSharp } from 'react-icons/io5';
import { piDesk, piDeskBold, piDeskDuotone, piDeskFill, } from 'react-icons/pi';

//pins
import { IoMdPin } from 'react-icons/io';
import { MdLoationPin } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';

//help
import { BsFillQuestionCircleFill, BsQuestionCircleFill } from 'react-icons/bs';
import { FaQuestion, FaQuestionCircle } from 'react-icons/bs';

//arrows (eg for exits, or pins)
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

export default function App() {

    //todo: clean - delete buttonInfo and adminButtonInfo structures, replaced with buttonInfo2 (which I should rename to categories or something)
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
        [
            {
                name: "room",
                icon: <IoTextSharp style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
        ],
        [
            {
                name: "washroom-unisex",
                icon: <BiMaleFemale style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
            {
                name: "washroom-female",
                icon: <FaFemale style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
            {
                name: "washroom-male",
                icon: <FaMale style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
        ],
        [
            {
                name: "food-store",
                icon: <IoCafe style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
            {
                name: "food-vending-machine",
                icon: <GiVendingMachine style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
            {
                name: "food-water-fountain",
                icon: <IoWater style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
        ],
        [
            {
                name: "transport-stairs",
                icon: <FaStairs style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
            {
                name: "transport-elevator",
                icon: <GrElevator style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
            {
                name: "transport-exit",
                icon: <IoMdExit style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
        ],
        [
            {
                name: "seating",
                icon: <MdChair style={{pointerEvents: 'none'}}/>,
                isPressed: false,
            },
        ],
    ]);

    //todo: change name of buttonInfo2, and get rid of the above two structures? maybe save them in notes somewhere
    const [buttonInfo2, setButtonInfo2] = useState([
        {
            name: "named-location",
            icon: <IoTextSharp style={{pointerEvents: 'none'}}/>,
            isPressed: false,
            subCategories: 
            [
                {
                    name: "room",
                    icon: <IoTextSharp style={{pointerEvents: 'none'}}/>,
                    isPressed: false,
                },
            ],
        },
        {
            name: "washroom",
            icon: <BiMaleFemale style={{pointerEvents: 'none'}}/>,
            isPressed: false,
            subCategories:
                [
                    {
                        name: "washroom-unisex",
                        icon: <BiMaleFemale style={{pointerEvents: 'none'}}/>,
                        isPressed: false,
                    },
                    {
                        name: "washroom-female",
                        icon: <FaFemale style={{pointerEvents: 'none'}}/>,
                        isPressed: false,
                    },
                    {
                        name: "washroom-male",
                        icon: <FaMale style={{pointerEvents: 'none'}}/>,
                        isPressed: false,
                    },
                ],
        },
        {
            name: "food-and-drink",
            icon: <IoCafe style={{pointerEvents: 'none'}}/>,
            isPressed: false,
            subCategories:
                [
                    {
                        name: "store",
                        icon: <IoCafe style={{pointerEvents: 'none'}}/>,
                        isPressed: false,
                    },
                    {
                        name: "vending-machine",
                        icon: <GiVendingMachine style={{pointerEvents: 'none'}}/>,
                        isPressed: false,
                    },
                    {
                        name: "water-fountain",
                        icon: <IoWater style={{pointerEvents: 'none'}}/>,
                        isPressed: false,
                    },
                ],
        },
        {
            name: "transportation",
            icon: <FaStairs style={{pointerEvents: 'none'}}/>,
            isPressed: false,
            subCategories: 
                [
                    {
                        name: "stairs",
                        icon: <FaStairs style={{pointerEvents: 'none'}}/>,
                        isPressed: false,
                    },
                    {
                        name: "elevator",
                        icon: <GrElevator style={{pointerEvents: 'none'}}/>,
                        isPressed: false,
                    },
                ],
        },
        {
            name: "seating",
            icon: <MdChair style={{pointerEvents: 'none'}}/>,
            isPressed: false,
            subCategories: 
            [
                {
                    name: "seating",
                    icon: <MdChair style={{pointerEvents: 'none'}}/>,
                    isPressed: false,
                },
            ],
        },
    ]);

    
    //q: todo: can I change some of the names in the below like 13 lines to something shorter?
    const getInitialStatesForShowButtons = (categories) => {
        //make a mapping between name and isPressed
        const map = new Map();
        categories.forEach( category => {
            const name = category.name;
            const state = {isPressed: false};
            map.set(name, state);
        });
        return map;
    }
    const [statesForShowButtons, setStatesForShowButtons] = useState(getInitialStatesForShowButtons(buttonInfo2));
    const changeButtonStateForShowButtons = (name, newState, categoryIndex, subCategoryIndex) => {


        //turn off corresponding add button
        //alert(JSON.stringify(buttonInfo2)); --> doesn't work
        //alert(buttonInfo2);
        //alert(categoryIndex);
        //alert(buttonInfo2[0].name);
        //alert(buttonInfo2[4].name);
        //alert(JSON.stringify(buttonInfo2[0]);
        //alert(JSON.stringify(Array.from(statesForShowButtons.entries())));

        //needs to be an array
        //alert(namesOfAddButtons);
        //alert('nameOfShowButton: ' + nameOfShowButton);
        //const addButtonIsPressed = statesForAddButtons.get(nameOfAddButton).isPressed;
        //alert('isPressed: ' + isPressed);
        if (newState.isPressed === false) {
            //alert('1');
            const namesOfAddButtons = buttonInfo2[categoryIndex].subCategories.map( subCategory => {
                return subCategory.name;
            });
            //alert('2');
            const mapOfAddButtons = new Map(statesForAddButtons);
            //alert('3');
            namesOfAddButtons.forEach( name => {
                if (mapOfAddButtons.get(name).isPressed) {
                    const newStateForAddButton = {isPressed: false};
                    mapOfAddButtons.set(name, newStateForAddButton);
                }
            });
            //alert('4');
            setStatesForAddButtons(mapOfAddButtons);
            //alert(JSON.stringify(Array.from(statesForAddButtons.entries())));
            //alert('5');
            //alert('in if');
            //const 
            //mapOfShowButtons.set(nameOfShowButton, newState);
            //setStatesForShowButtons(mapOfShowButtons);
        }
        //todo: when turn off showButton, should turn off corresponding addButton
        //alert('after if');


        //alert('in the function');
        //alert(name);
        //alert(JSON.stringify(newState));
        //alert('1');
        //alert(typeof getInitialStatesForShowButtons(buttonInfo2));
        //alert(typeof statesForShowButtons);
        //alert(typeof new Map());
        const mapOfShowButtons = new Map(statesForShowButtons); //--> error
        //alert(typeof map);
        //alert('2');
        mapOfShowButtons.set(name, newState); //--> error
        //alert('3');
        setStatesForShowButtons(mapOfShowButtons);
        //alert('4');
    }

    //q: should i compbine the addbutton stuff with the showbutton stuff?
    const getInitialStatesForAddButtons = (categories) => {
        //make a mapping between name and isPressed
        const map = new Map();
        categories.forEach( category => {
            const subCategories = category.subCategories;
            subCategories.forEach( subCategory => {
                const name = subCategory.name;
                const state = {isPressed: false};
                map.set(name, state);
            });
        });
        return map;
    }
    //todo: change statesForAddButtons to mapOfAddButtonStates. ditto for ShowButtons
    const [statesForAddButtons, setStatesForAddButtons] = useState(getInitialStatesForAddButtons(buttonInfo2));
    const changeButtonStateForAddButtons = (buttonName, newState, categoryIndex, subCategoryIndex) => {

        //change state of show buttons
        //get column of add button
        //const categoryIndex = buttonInfo2.findIndex( category => {
        //    category.subCategories.some( subCategory => {
        //        subCategory.name == buttonName;
        //    });
        //});

        //turn on show button, if off
        //alert(JSON.stringify(buttonInfo2)); --> doesn't work
        //alert(buttonInfo2);
        //alert(categoryIndex);
        //alert(buttonInfo2[0].name);
        //alert(buttonInfo2[4].name);
        //alert(JSON.stringify(buttonInfo2[0]);
        //alert(JSON.stringify(Array.from(statesForShowButtons.entries())));
        const nameOfShowButton = buttonInfo2[categoryIndex].name;
        //alert('nameOfShowButton: ' + nameOfShowButton);
        const showButtonIsPressed = statesForShowButtons.get(nameOfShowButton).isPressed;
        //alert('isPressed: ' + isPressed);
        if (newState.isPressed && !showButtonIsPressed ) {
            //alert('in if');
            const mapOfShowButtons = new Map(statesForShowButtons);
            mapOfShowButtons.set(nameOfShowButton, newState);
            setStatesForShowButtons(mapOfShowButtons);
        }
        //todo: when turn off showButton, should turn off corresponding addButton
        //alert('after if');

        //change state of other show buttons
        const mapOfAddButtons = new Map(statesForAddButtons);
        for (let [key, value] of mapOfAddButtons) {
            const newState = {isPressed: false};
            mapOfAddButtons.set(key, newState);
            //alert('key: ' + key);
            //alert('newState: ' + newState.isPressed);
        }
        //alert(JSON.stringify(Array.from(mapOfAddButtons.entries())));
        //mapOfAddButtons.forEach( (value, key) => {
        //    const newState = {isPressed: false};
        //    mapOfAddButtons.set(key, newState);
        //});
        //alert('newState: ' + JSON.stringify(newState));
        mapOfAddButtons.set(buttonName, newState);
        //alert(JSON.stringify(Array.from(mapOfAddButtons.entries())));
        setStatesForAddButtons(mapOfAddButtons);

        //change state of add button
        //const map = new Map(statesForAddButtons);
        //map.set(buttonName, newState);
        //setStatesForAddButtons(map);
    };


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
                    buttonInfo2={buttonInfo2}
                    setButtonInfo2={setButtonInfo2}
                    adminButtonInfo={adminButtonInfo}
                    setAdminButtonInfo={setAdminButtonInfo}
                    changeButtonStateForShowButtons={changeButtonStateForShowButtons}
                    changeButtonStateForAddButtons={changeButtonStateForAddButtons}
                    statesForShowButtons={statesForShowButtons}
                    statesForAddButtons={statesForAddButtons}
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
