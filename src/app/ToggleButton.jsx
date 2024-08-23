'use client'
import { useState, useEffect, useRef } from 'react';


export default function ToggleButton({
    children, 
    name,
    isLastButton,
    typeOfButton,
    changeButtonIsActive,
    handleCreationButtonClick,
    isActive,
}) {

    const [tappedWhenPressed, setTappedWhenPressed] = useState(false);
    //if (debugging) alert(isPressed);

    const handleTouchStart = (e) => {
        if (isActive) {
            setTappedWhenPressed(true);
            return;
        } else {
            setTappedWhenPressed(false);
            //changeButtonIsActive(typeOfButton, name, true);
            handleCreationButtonClick(name);
        }
    }
    const handleTouchEnd = (e) => {
        if (tappedWhenPressed) {
            //alert('change to false');
            //changeButtonIsActive(typeOfButton, name, false)
            handleCreationButtonClick(name);

            //todo: chatgpt gave some tips for making this work, one of which is to use ngrok to craete an https connection on local wifi
            //todo: once that works, add to handleTouchStart
            if (window.navigator && window.navigator.vibrate) { //only attempt to vibrate if vibration supported
                window.navigator.vibrate(1000);
            }
        }
    }
    const message = ''
        + 'name: ' + name + '\n'
        + 'isActive: ' + isActive + '\n';
    //alert(message);
    const className = 
        "toggle_button" 
        + (isLastButton ? " last_button" : "") 
        + (isActive ? " pressed" : "");

    return (
        //q: might be able to use a style to handle touchStart and touchEnd seperately
        <button className={className} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {children}
        </button>
    );
}
