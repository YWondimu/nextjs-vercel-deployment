'use client'
import { useState, useEffect, useRef } from 'react';


export default function ToggleButton({
    children, 
    categoryIndex,
    subCategoryIndex,
    index,
    subTypeIndex, 
    isLastButton,
    buttonInfo,
    setButtonInfo,
    name,
    buttonId,
    statesForShowButtons,
    statesForAddButtons,
    //className,
    isShowButton,
    isAddButton,
    isPressed,
    changeButtonState,
    debugging,
}) {

    //if (debugging) alert('isPressed: ' + isPressed);
    //const ref = useRef(null);
    //useEffect( () => {
    //    if (debugging) alert('in useEffect');
    //    if (!ref.current) {
    //        if (debugging) alert('in useEffect - no ref');
    //        //this was suggested by cgpt, checks
    //        //if node not yet mounted, exit
    //        return;
    //    }
    //    if (isPressed) {
    //        if (debugging) alert('in useEffect -  if');
    //        ref.current.classList.add('pressed');
    //    } else {
    //        if (debugging) alert('in useEffect - else');
    //        ref.current.classList.remove('pressed');
    //    }
    //}, [isPressed]);

    //const [isPressed, setIsPressed] = useState(false);
    const [tappedWhenPressed, setTappedWhenPressed] = useState(false);
    //if (debugging) alert(isPressed);

    const handleTouchStart = (e) => {
        //if (isPressed) {
        
        //if (buttonInfo[buttonId].isPressed) {
        if (isPressed) {
            setTappedWhenPressed(true);
            return;
        } else {
            setTappedWhenPressed(false);
            //const addButton = document.querySelector(".add_button");
            //addButton.classList.add("pressed");
            //e.target.classList.add("pressed");
            //setIsPressed(true);

            //---- revision ----
            //const updatedButtonInfo = buttonInfo;
            //updatedButtonInfo[buttonId].isPressed = true;
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
            //setButtonInfo(updatedButtonInfo);
            const state = {isPressed: true}
            changeButtonState(name, state, categoryIndex, subCategoryIndex);
            //---- revision ----
        }
    }
    const handleTouchEnd = (e) => {
        if (tappedWhenPressed) {
            //const addButton = document.querySelector(".add_button");
            //addButton.classList.remove("pressed");
            //e.target.classList.remove("pressed");
            //setIsPressed(false);
            //const updatedButtonInfo = buttonInfo;
            //updatedButtonInfo[buttonId].isPressed = false;
            //setButtonInfo(updatedButtonInfo);
            const state = {isPressed: false}
            changeButtonState(name, state, categoryIndex, subCategoryIndex);

            //todo: chatgpt gave some tips for making this work, one of which is to use ngrok to craete an https connection on local wifi
            //todo: once that works, add to handleTouchStart
            if ("vibrate" in navigator) { //only attempt to vibrate if vibration supported
                navigator.vibrate(1000);
            } else {
                //alert(navigator.userAgent);
                //alert(navigator.vibrate);
            }
        }
    }
    const className = 
        "toggle_button" 
        + (isLastButton ? " last_button" : "") 
        + (isPressed ? " pressed" : "");

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
