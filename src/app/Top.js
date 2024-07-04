'use client'
import { useState } from 'react';
import ToggleButton from './ToggleButton';

export default function Top({ isPressed, setIsPressed }) {
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
            <div className="button_row">
                <button className="button_label">
                    Show
                </button>
                <ToggleButton className="toggle_button">
                    RM
                </ToggleButton>
                <ToggleButton className="toggle_button">
                    RM
                </ToggleButton>
                <ToggleButton className="toggle_button">
                    WC
                </ToggleButton>
                <ToggleButton className="toggle_button">
                    S/E
                </ToggleButton>
                <ToggleButton className="toggle_button last_button">
                    FTN
                </ToggleButton>
                {/*
                <button className="a_demo_three">
                    hello
                </button>
                */}
            </div>
            <div className="button_row">
                <button className="button_label">
                    Add
                </button>
                <ToggleButton className="toggle_button">
                    RM
                </ToggleButton>
                <ToggleButton className="toggle_button">
                    RM
                </ToggleButton>
                <ToggleButton className="toggle_button">
                    WC
                </ToggleButton>
                <ToggleButton className="toggle_button">
                    S/E
                </ToggleButton>
                <ToggleButton className="toggle_button last_button">
                    FTN
                </ToggleButton>
            </div>
        </div>
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
