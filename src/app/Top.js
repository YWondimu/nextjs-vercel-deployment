'use client'
import { useState } from 'react';
export default function Top({isPressed, setIsPressed}) {
    const [tappedWhenPressed, setTappedWhenPressed] = useState(false);
    const handleTouchStart = (e) => {
        if (isPressed) {
            setTappedWhenPressed(true);
            return;
        } else {
            setTappedWhenPressed(false);
            //const addButton = document.querySelector(".add_button");
            //addButton.classList.add("pressed");
            e.target.classList.add("pressed");
            setIsPressed(true);
        }
    }
    const handleTouchEnd = (e) => {
        if (tappedWhenPressed) {
            //const addButton = document.querySelector(".add_button");
            //addButton.classList.remove("pressed");
            e.target.classList.remove("pressed");
            setIsPressed(false);
        }
    }
    return (
        <div className='top prevent_select'>
        {/*
        <div className='top'>
        */}
            <button className="add_button" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouch>
                RM
            </button>
            <div className="button_type">
                Show
            </div>
            <button className="button" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouch>
                RM
            </button>
            <button className="button" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouch>
                WC
            </button>
        </div>
    );
}
