'use client'
import { useState } from 'react';


export default function ToggleButton({
    children, 
    index, 
    isLastButton,
    buttonInfo,
    setButtonInfo,
    name,
    buttonId,
}) {
    const [isPressed, setIsPressed] = useState(false);
    const [tappedWhenPressed, setTappedWhenPressed] = useState(false);
    const handleTouchStart = (e) => {
        //if (isPressed) {
        
        if (buttonInfo[buttonId].isPressed) {
            setTappedWhenPressed(true);
            return;
        } else {
            setTappedWhenPressed(false);
            //const addButton = document.querySelector(".add_button");
            //addButton.classList.add("pressed");
            e.target.classList.add("pressed");
            //setIsPressed(true);

            //---- revision ----
            const updatedButtonInfo = buttonInfo;
            updatedButtonInfo[buttonId].isPressed = true;
            //const updatedButtonInfo = buttonInfo.map((item) => {
            //    let updatedItem = item;
            //    if (name == buttonInfo.name) {
            //        updatedItem = {
            //            ...item,
            //            isPressed: true,
            //        }
            //    }
            //    return updatedItem;
            //});
            setButtonInfo(updatedButtonInfo);
            //---- revision ----
        }
    }
    const handleTouchEnd = (e) => {
        if (tappedWhenPressed) {
            //const addButton = document.querySelector(".add_button");
            //addButton.classList.remove("pressed");
            e.target.classList.remove("pressed");
            //setIsPressed(false);
            const updatedButtonInfo = buttonInfo;
            updatedButtonInfo[buttonId].isPressed = false;
            setButtonInfo(updatedButtonInfo);
        }
    }
    const className = "toggle_button" + (isLastButton ? " last_button" : "");
    return (
        <button className={className} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {children}
        </button>
    );
}
//room
//washroom
//stairs
//fountinas
//vending machines
//library?
//benches?
//exits?
