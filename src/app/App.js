'use client'
import Top from './Top.js';
import Middle from './Middle.js';
import Bottom from './Bottom.js';
import FloatingButton from './FloatingButton.jsx';
import './styles.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import icons from './icons'

export default function App() {

    const [buttonState, setButtonState] = useState({
        //NOTE: i think for the sake of consistency and avoiding error, i will use singular for for all of the below, not plural --> Or! I should make them plural, not singular? that probably makes more sense?
        visibilityButtons: { //TODO: change all visibilityButtons to visibilituButton
            room: {
                isActive: false,
                //icon: 'x',
                icon: icons.room,
            },
            washroom: {
                isActive: false,
                //icon: 'x',
                icon: icons.washroom,
            },
            foodAndDrink: {
                isActive: false,
                //icon: 'x',
                icon: icons.foodAndDrink,
            },
            accessPoint: {
                isActive: false,
                //icon: 'x',
                icon: icons.accessPoint,
            },
            seating: {
                isActive: false,
                //icon: 'x',
                icon: icons.seating,
            },
        }, 
        creationButtons: { //TODO: change all visibilityButtons to visibilituButton
            room: {
                isActive: false,
                category: "room",
                //icon: 'x',
                icon: icons.room,
            },
            genderNeutralWashroom: {
                isActive: false,
                category: "washroom",
                //icon: 'x',
                icon: icons.washroom,
            },
            femaleWashroom: {
                isActive: false,
                category: "washroom",
                //icon: 'x',
                icon: icons.femaleWashroom
            },
            //TODO: change the below to singular maleWashrooms
            maleWashrooms: {
                isActive: false,
                category: "washroom",
                //icon: 'x',
                icon: icons.maleWashroom,
            },
            foodStore: {
                isActive: false,
                category: "foodAndDrink",
                //icon: 'x',
                icon: icons.foodAndDrink,
            },
            vendingMachine: {
                isActive: false,
                category: "foodAndDrink",
                //icon: 'x',
                icon: icons.vendingMachine,
            },
            waterFountain: {
                isActive: false,
                category: "foodAndDrink",
                //icon: 'x',
                icon: icons.waterFountain,
            },
            stair: {
                isActive: false,
                category: "accessPoint",
                //icon: 'x',
                icon: icons.stair,
            },
            elevator: {
                isActive: false,
                category: "accessPoint",
                //icon: 'x',
                icon: icons.elevator,
            },
            //TODO: rename to entranceAndExit?
            entranceExit: {
                isActive: false,
                category: "accessPoint",
                //icon: 'x',
                icon: icons.entranceAndExit,
            },
            seating: {
                isActive: false,
                category: "seating",
                //icon: 'x',
                icon: icons.seating,
            },
        },
    });
    const changeButtonIsActive = (section, buttonKey, isActive) => {
        //code for debugging
        //const message = ''
        //    + 'section: ' + section + '\n'
        //    + 'buttonKey: ' + buttonKey + '\n'
        //    + 'isActive: ' + isActive + '\n';
        //alert(message);
        //alert(JSON.stringify(buttonState));
        setButtonState((prevState) => ({
            ...prevState,  // Preserve the other parts of the state
            [section]: {
                ...prevState[section],  // Preserve the other buttons in this section
                [buttonKey]: {
                    ...prevState[section][buttonKey],  // Preserve other properties of this button
                    isActive: isActive,  // Toggle isActive
                },
            },
        }));
    };
    // Example usage for the 'room' button in 'visibilityButtons'
    //changeButtonIsActive('visibilityButtons', 'room', true);

    //todo: clean - delete buttonInfo and adminButtonInfo structures, replace with the new categories data structure
    const [buttonInfo, setButtonInfo] = useState([
        {
            name: "room",
            icon: icons.room,
            isPressed: false,
        },
        {
            name: "washroom",
            icon: icons.washroom,
            isPressed: false,
        },
        {
            name: "food",
            icon: icons.foodAndDrink,
            isPressed: false,
        },
        {
            name: "transport",
            icon: icons.entranceAndExit,
            isPressed: false,
        },
        {
            name: "seating",
            icon: icons.seating,
            isPressed: false,
        },
    ]);
    const [adminButtonInfo, setAdminButtonInfo] = useState([
        [
            {
                name: "room",
                icon: icons.room,
                isPressed: false,
            },
        ],
        [
            {
                name: "washroom-unisex",
                icon: icons.washroom,
                isPressed: false,
            },
            {
                name: "washroom-female",
                icon: icons.femaleWashroom,
                isPressed: false,
            },
            {
                name: "washroom-male",
                icon: icons.maleWashroom,
                isPressed: false,
            },
        ],
        [
            {
                name: "food-store",
                icon: icons.foodAndDrink,
                isPressed: false,
            },
            {
                name: "food-vending-machine",
                icon: icons.vendingMachine,
                isPressed: false,
            },
            {
                name: "food-water-fountain",
                icon: icons.waterFountain,
                isPressed: false,
            },
        ],
        [
            {
                name: "transport-stairs",
                icon: icons.stair,
                isPressed: false,
            },
            {
                name: "transport-elevator",
                icon: icons.elevator,
                isPressed: false,
            },
            {
                name: "transport-exit",
                icon: icons.entranceAndExit,
                isPressed: false,
            },
        ],
        [
            {
                name: "seating",
                icon: icons.seating,
                isPressed: false,
            },
        ],
    ]);

    //todo: change name of buttonInfo2, and get rid of the above two structures? maybe save them in notes somewhere
    const [categories, setCategories] = useState([
        {
            name: "named-location",
            icon: icons.room,
            isPressed: false,
            subCategories: 
            [
                {
                    name: "room",
                    icon: icons.room,
                    isPressed: false,
                },
            ],
        },
        {
            name: "washroom",
            icon: icons.washroom,
            isPressed: false,
            subCategories:
                [
                    {
                        name: "washroom-unisex",
                        icon: icons.washroom,
                        isPressed: false,
                    },
                    {
                        name: "washroom-female",
                        icon: icons.femaleWashroom,
                        isPressed: false,
                    },
                    {
                        name: "washroom-male",
                        icon: icons.maleWashroom,
                        isPressed: false,
                    },
                ],
        },
        {
            name: "food-and-drink",
            icon: icons.foodAndDrink,
            isPressed: false,
            subCategories:
                [
                    {
                        name: "store",
                        icon: icons.foodStore,
                        isPressed: false,
                    },
                    {
                        name: "vending-machine",
                        icon: icons.vendingMachine,
                        isPressed: false,
                    },
                    {
                        name: "water-fountain",
                        icon: icons.waterFountain,
                        isPressed: false,
                    },
                ],
        },
        {
            name: "transportation",
            icon: icons.stair,
            isPressed: false,
            subCategories: 
                [
                    {
                        name: "stairs",
                        icon: icons.stair,
                        isPressed: false,
                    },
                    {
                        name: "elevator",
                        icon: icons.elevator,
                        isPressed: false,
                    },
                    {
                        name: "exit",
                        icon: icons.entranceAndExit,
                        isPressed: false,
                    },
                ],
        },
        {
            name: "seating",
            icon: icons.seating,
            isPressed: false,
            subCategories: 
            [
                {
                    name: "seating",
                    icon: icons.seating,
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

        //needs to be an array
        let oldState;
        if (isPressed === false) {
            const namesOfAddButtons = categories[categoryIndex].subCategories.map( subCategory => {
                return subCategory.name;
            });
            const mapOfAddButtons = new Map(statesForAddButtons);
            namesOfAddButtons.forEach( name => {
                oldState = mapOfAddButons.get(name);
                if (oldState.isPressed) {
                    const newStateForAddButton = {
                        ...oldState,
                        isPressed: isPressed,
                    };
                    mapOfAddButtons.set(name, newStateForAddButton);
                }
            });
            setStatesForAddButtons(mapOfAddButtons);
        }
        //todo: when turn off showButton, should turn off corresponding addButton

        const mapOfShowButtons = new Map(statesForShowButtons); //--> error
        let newState = {
            ...oldState,
            isPressed: isPressed,
        }
        mapOfShowButtons.set(name, newState); //--> error
        setStatesForShowButtons(mapOfShowButtons);
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

        //turn on show button, if off
        const nameOfShowButton = categories[categoryIndex].name;
        const showButtonIsPressed = statesForShowButtons.get(nameOfShowButton).isPressed;
        let oldStateForShowButtons;
        if (isPressed && !showButtonIsPressed ) {
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

        //change state of other show buttons
        const mapOfAddButtons = new Map(statesForAddButtons);
        for (let [key, value] of mapOfAddButtons) {
            const newState = {
                ...value,
                isPressed: false,
            };
            mapOfAddButtons.set(key, newState);
        }
        const oldStateForAddButton = mapOfAddButtons.get(name);
        const newStateForAddButton = {
            ...oldStateForAddButton,
            isPressed: isPressed,
        }
        mapOfAddButtons.set(buttonName, newStateForAddButton);
        setStatesForAddButtons(mapOfAddButtons);

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

    const [isAdmin, setIsAdmin] = useState(false);
    const loginAdmin = (e) => {
        const top = document.getElementsByClassName("top")[0];
        const bottom = document.getElementsByClassName("bottom")[0];
        const button = document.getElementsByClassName("hide_button_top_panel")[0];

        setIsAdmin( prev => !prev);
    }
    const [showMode, setShowMode] = useState([]);
    const [addMode, setAddMode] = useState([]);
    const [mode, setMode] = useState({});

    const [scale, setScale] = useState(1);
    const handleZoomIn = () => {
        setScale( prev => Math.min(prev*1.5, 5) );
    };
    const handleZoomOut = () => {
        setScale( prev => Math.max(prev*0.7, 0.5) );
    };

    return (
        <>
            <motion.div 
                className="manual-viewport prevent_select"
                //drag
            >
                    <button 
                        className="admin_login" 
                        onClick={loginAdmin}
                    >
                    {isAdmin ? "admin logout" : "admin login"}
                    </button>
                    <button 
                        className="hide_button_top_panel" 
                        id="TESTING" 
                        onClick={hidePanels2}
                    >
                        hide panels
                    </button>
                <div className="zoom-buttons-container">
                    <FloatingButton handleZoom={handleZoomIn}>
                        {icons.plusSign}
                    </FloatingButton>
                    <FloatingButton handleZoom={handleZoomOut}>
                        {icons.minusSign}
                    </FloatingButton>
                    <FloatingButton>
                       {icons.trashCan}
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

                    buttonState ={buttonState}
                    setButtonState ={setButtonState}
                    changeButtonIsActive={changeButtonIsActive}
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
