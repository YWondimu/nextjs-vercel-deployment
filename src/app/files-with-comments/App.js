'use client'
import Top from './Top.js';
import Middle from './Middle.js';
import Bottom from './Bottom.js';
import FloatingButton from './FloatingButton.jsx';
import './styles.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

//zoom
import { FaPlus, FaMinus } from 'react-icons/fa';

// trash
import { FaRegTrashAlt } from 'react-icons/fa';

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

    //todo: clean - delete buttonInfo and adminButtonInfo structures, replace with the new categories data structure
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
    const [categories, setCategories] = useState([
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
                    {
                        name: "exit",
                        icon: <IoMdExit style={{pointerEvents: 'none'}}/>,
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
    //q: instead of a map, should I use hte categories structure? might be good to have state be seperate from categories. hmm.
    const getInitialStatesForShowButtons = (categories) => {
        //make a mapping between name and isPressed
        const map = new Map();
        categories.forEach( category => {
            const name = category.name;
            const icon = category.icon;
            const state = {
                isPressed: false,
                icon: icon,
            };
            map.set(name, state);
        });
        return map;
    }
    const [statesForShowButtons, setStatesForShowButtons] = useState(getInitialStatesForShowButtons(categories));
    const changeButtonStateForShowButtons = (name, isPressed, categoryIndex, subCategoryIndex) => {
        //turn off corresponding add button
        //alert(JSON.stringify(categories)); --> doesn't work
        //alert(categories);
        //alert(categoryIndex);
        //alert(categories[0].name);
        //alert(categories[4].name);
        //alert(JSON.stringify(categories[0]);
        //alert(JSON.stringify(Array.from(statesForShowButtons.entries())));

        //needs to be an array
        //alert(namesOfAddButtons);
        //alert('nameOfShowButton: ' + nameOfShowButton);
        //const addButtonIsPressed = statesForAddButtons.get(nameOfAddButton).isPressed;
        //alert('isPressed: ' + isPressed);
        let oldState;
        if (isPressed === false) {
            //alert('1');
            const namesOfAddButtons = categories[categoryIndex].subCategories.map( subCategory => {
                return subCategory.name;
            });
            //alert('2');
            const mapOfAddButtons = new Map(statesForAddButtons);
            //alert('3');
            namesOfAddButtons.forEach( name => {
                oldState = mapOfAddButons.get(name);
                //if (mapOfAddButtons.get(name).isPressed) {
                if (oldState.isPressed) {
                    const newStateForAddButton = {
                        ...oldState,
                        isPressed: isPressed,
                    };
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
        //alert(typeof getInitialStatesForShowButtons(categories));
        //alert(typeof statesForShowButtons);
        //alert(typeof new Map());
        const mapOfShowButtons = new Map(statesForShowButtons); //--> error
        //alert(typeof map);
        //alert('2');
        let newState = {
            ...oldState,
            isPressed: isPressed,
        }
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
    const [statesForAddButtons, setStatesForAddButtons] = useState(getInitialStatesForAddButtons(categories));
    const changeButtonStateForAddButtons = (buttonName, isPressed, categoryIndex, subCategoryIndex) => {

        //change state of show buttons
        //get column of add button
        //const categoryIndex = categories.findIndex( category => {
        //    category.subCategories.some( subCategory => {
        //        subCategory.name == buttonName;
        //    });
        //});

        //turn on show button, if off
        //alert(JSON.stringify(categories)); --> doesn't work
        //alert(categories);
        //alert(categoryIndex);
        //alert(categories[0].name);
        //alert(categories[4].name);
        //alert(JSON.stringify(categories[0]);
        //alert(JSON.stringify(Array.from(statesForShowButtons.entries())));
        const nameOfShowButton = categories[categoryIndex].name;
        //alert('nameOfShowButton: ' + nameOfShowButton);
        const showButtonIsPressed = statesForShowButtons.get(nameOfShowButton).isPressed;
        //alert('isPressed: ' + isPressed);
        let oldStateForShowButtons;
        if (isPressed && !showButtonIsPressed ) {
            //alert('in if');
            const mapOfShowButtons = new Map(statesForShowButtons);
            oldStateForShowButtons = mapOfShowButtons.get(name);
            const newStateForShowButton = {
                ...oldStateForShowButtons,
                isPressed: isPressed,
            }
            mapOfShowButtons.set(nameOfShowButton, newStateForShowButton);
            setStatesForShowButtons(mapOfShowButtons);
        }
        //todo: when turn off showButton, should turn off corresponding addButton
        //alert('after if');

        //change state of other show buttons
        const mapOfAddButtons = new Map(statesForAddButtons);
        for (let [key, value] of mapOfAddButtons) {
            const newState = {
                ...value,
                isPressed: false,
            };
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
        const oldStateForAddButton = mapOfAddButtons.get(name);
        const newStateForAddButton = {
            ...oldStateForAddButton,
            isPressed: isPressed,
        }
        mapOfAddButtons.set(buttonName, newStateForAddButton);
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
        //alert('hide panels');
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
    
    const [isAdmin, setIsAdmin] = useState(false);
    const loginAdmin = (e) => {
        const top = document.getElementsByClassName("top")[0];
        const bottom = document.getElementsByClassName("bottom")[0];
        const button = document.getElementsByClassName("hide_button_top_panel")[0];
        //console.log('admin clicked!');
        //alert('admin clicked!');

        setIsAdmin( prev => !prev);
        //if (!isAdmin) {
        //    top.classList.remove("invisible");
        //    bottom.classList.remove("invisible");
        //    top.classList.add("visible");
        //    bottom.classList.add("visible");
        //    button.innerHTML = "hide panels";
        //} else {
        //    top.classList.add("invisible");
        //    bottom.classList.add("invisible");
        //    top.classList.remove("visible");
        //    bottom.classList.remove("visible");
        //    button.innerHTML = "show panels"; 
        //}
        //setPanelsAreHidden( prev => !prev);
    }
    const [showMode, setShowMode] = useState([]);
    const [addMode, setAddMode] = useState([]);
    const [mode, setMode] = useState({});

    const [scale, setScale] = useState(1);
    const handleZoomIn = () => {
        //setScale( prev => Math.min(prev+0.5, 5) );
        setScale( prev => Math.min(prev*1.5, 5) );
    };
    const handleZoomOut = () => {
        //setScale( prev => Math.max(prev-0.5, 0.2) );
        setScale( prev => Math.max(prev*0.7, 0.5) );
    };

    return (
        <>
            <motion.div 
                className="manual-viewport prevent_select"
                //drag
            >
                {/*
                <button className="toggle_button hide_button_top_panel" id="TESTING" onClick={hidePanels2}>
                */}
                {/*
                <div className="menu_buttons_container">
                <div className="TEST">
                */}
                    <button 
                        className="admin_login" 
                        //onTouchStart={loginAdmin}
                        onClick={loginAdmin}
                    >
                    {isAdmin ? "admin logout" : "admin login"}
                    </button>
                    <button 
                        className="hide_button_top_panel" 
                        id="TESTING" 
                        //onTouchStart={hidePanels2}
                        onClick={hidePanels2}
                    >
                        hide panels
                    </button>
                {/*
                </div>
                */}
                <div className="zoom-buttons-container">
                    <FloatingButton handleZoom={handleZoomIn}>
                        <FaPlus size={20}/>
                    </FloatingButton>
                    <FloatingButton handleZoom={handleZoomOut}>
                        <FaMinus size={20}/>
                    </FloatingButton>
                    <FloatingButton>
                        <FaRegTrashAlt size={20}/>
                    </FloatingButton>
                </div>

                <Top 
                    isPressed={isPressed} 
                    setIsPressed={setIsPressed} 
                    mode={mode}
                    setMode={setMode}
                    buttonInfo={buttonInfo}
                    setButtonInfo={setButtonInfo}
                    categories={categories}
                    setCategories={setCategories}
                    adminButtonInfo={adminButtonInfo}
                    setAdminButtonInfo={setAdminButtonInfo}
                    changeButtonStateForShowButtons={changeButtonStateForShowButtons}
                    changeButtonStateForAddButtons={changeButtonStateForAddButtons}
                    statesForShowButtons={statesForShowButtons}
                    statesForAddButtons={statesForAddButtons}
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                >
                </Top>
                <Middle 
                    isPressed={isPressed}
                    categories={categories}
                    setCategories={setCategories}
                    scale={scale}
                >
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
