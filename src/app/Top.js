'use client'
import { useState } from 'react';
import ToggleButton from './ToggleButton';
//import {
//    //washroom
//    BiMaleFemale, 
//    FaFemale, FaMale, BiFemale, BiMale,
//    //food
//    GrCafeteria,  IoCafe, LuGlassWater, MdWaterDrop, GiVendingMachine, PiBowlFoodFill, PiBowlFoodDuotone, IoFastFood, MdEmojiFood, 
//    //exits
//    FaStairs, MdOutlineStairs, MdStairs, Gi3dStairs, GiStairs,
//    RxExit, ImExit, IoExit, 
//    FaElevator, MdElevator, MdOutlineElevator, GrElevator,
//    //seating areas
//    MdChair, MdOutlineChair, PiChairBold, PiChair, 
//    //accessibility
//    PiWheelchairmotion,
//    //roooms
//    IoText,
//    //pins
//    IoMdPin, MdLoationPin, LuMapPin,
//    //arrows (eg for exits, or pins)
//    FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown,
//    FaLongArrowAltLeft, FaLongArrowAltRight, FaLongArrowAltUp, FaLongArrowAltDown,
//
//} from 'react-icons';
//washroom

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

//import {
//    BiMaleFemale, BiFemale, BiMale,
//} from 'react-icons/bi';
//import {
// FaFemale, FaMale, 
//} from 'react-icons/fa';
//import {
//} from 'react-icons/fd';
//import {
//} from 'react-icons/gi';
//import {
//} from 'react-icons/gr';
//    GrCafeteria, 
//import {
//} from 'react-icons/im';
//import {
//    IoCafe, 
//} from 'react-icons/io';
//import {
//    LuGlassWater, 
//} from 'react-icons/lu';
//import {
//MdWaterDrop, GiVendingMachine, PiBowlFoodFill, PiBowlFoodDuotone, IoFastFood, MdEmojiFood, 
//} from 'react-icons/md';
//import {
//} from 'react-icons/pi';
//import {
//} from 'react-icons/rx';

export default function Top({ 
    setIsPressed, isPressed, 
    setMode, mode,
    setButtonInfo, buttonInfo,
    setAdminButtonInfo, adminButtonInfo,

}) {
    ////initialized mode
    //room
    //washroom: men, women, neutral
    //
    //seating area
    //
    //travel: elevator and stairs and exit
    //
    //food: fountain and vending machine and cafe
    //
    //elevator
    //
    //elevator and stairs
    //stairs
    //exit
    //
    //fountain
    //seating area
    //food area
    //vending machine

    //const buttons = [
    //    {
    //        name: "room",
    //        icon: "",
    //        label: "Room",
    //        pressed: false,
    //    },
    //    {
    //        name: "washroom",
    //        icon: "",
    //        label: "WC",
    //        pressed: false,
    //    },
    //    {
    //        name: "room",
    //        icon: "",
    //        label: "Room",
    //        pressed: false,
    //    },
    //    {
    //        name: "room",
    //        icon: "",
    //        label: "Room",
    //        pressed: false,
    //    },
    //    {
    //        name: "room",
    //        icon: "",
    //        label: "Room",
    //        pressed: false,
    //    },
    //    {
    //        name: "room",
    //        icon: "",
    //        label: "Room",
    //        pressed: false,
    //    },
    //];
    const initialMode = {};
    //setMode(initialMode);


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

    //setMode({test: "hello"});
    const valuesForShow = [];
    const valuesForAdd = [];

    let amount = 5;
    for (let i = 0; i < amount; i++) {
        valuesForShow.push(false);
        valuesForAdd.push(false);
    }

    //const handleClick = () => {
        //setMode(
        //    {
        //        show:
        //            valuesForShow,
        //        add:
        //            valuesForAdd,
        //    }
        //);
    //};

    //let lastIndex = buttonInfo.length - 1;
    //const buttons = "test";
    //const adminButtons = "test";
    //const buttons = buttonInfo.map((item, index) => {
    //    let classes = "toggle_button";
    //    if (index === lastIndex) {
    //        classes += " last_button";
    //    }
    //    let icon;
    //    if (item.icon != null) {
    //        icon = item.icon;
    //    }
    //    return (
    //        <ToggleButton 
    //            key={index} 
    //            buttonInfo={buttonInfo}
    //            setButtonInfo={setButtonInfo}
    //        >
    //            {icon}
    //        </ToggleButton>
    //    );
    //});
    //const adminButtons = adminButtonInfo.map((item, index) => {
    //    let classes = "toggle_button";
    //    if (index === lastIndex) {
    //        classes += " last_button";
    //    }
    //    let icon;
    //    if (item.icon != null) {
    //        icon = item.icon;
    //    }
    //    return (
    //        <ToggleButton 
    //            key={index} 
    //            buttonInfo={adminButtonInfo}
    //            setButtonInfo={setAdminButtonInfo}
    //        >
    //            {icon}
    //        </ToggleButton>
    //    );
    //});
    const getToggleButtons = (rowName, buttonInfo) => {
        let length = buttonInfo.length;
        let buttons = [];
        //buttons.push(
        //    <button className="button_label">
        //        {rowName}
        //    </button>
        //);
        for (let i = 0; i < length; i++) {
            const current = buttonInfo[i];
            let isLastButton = false;
            if (i === length-1) {
                isLastButton = true;
            }
            //alert(classes + i);
            const icon = current.icon !== null ? current.icon : "";
            buttons.push(
                <ToggleButton 
                    key={i} 
                    name={buttonInfo.name}
                    buttonId={i}
                    buttonInfo={buttonInfo}
                    setButtonInfo={setButtonInfo}
                    isLastButton={isLastButton}
                >
                    {icon}
                </ToggleButton>
            );
        }
        return buttons;
    };
    const getAdminButtons = (rowName, buttonInfo) => {
        let length = buttonInfo.length;
        let buttons = [];
        //buttons.push(
        //    <button className="button_label">
        //        {rowName}
        //    </button>
        //);

        //todo: figure out the lastButton class
        let row = [];
        for (let i = 0; i < length; i++) {
            const buttonOptions = buttonInfo[i];
            let columnLength = buttonOptions.length;
            let column = [];
            for (let j = 0; j < columnLength; j++) {
                let button = buttonOptions[j];
                column.push(
                    <ToggleButton 
                        className="admin-button"
                        key={j} 
                        name={button.name}
                        buttonId={i}
                        buttonInfo={button}
                        //todo: change name of setButtonInfo property for readability? might cause confusion with the "actual" setButtonInfo function, compared with setAdminButtonInfo
                        setButtonInfo={setAdminButtonInfo}
                        //isLastButton={isLastButton}
                    >
                        {button.icon}
                    </ToggleButton>
                );
            }
            row.push(
                <div className="admin-button-column">
                    {column}
                </div>
            );
            //let isLastButton = false;
            //if (i === length-1) {
            //    isLastButton = true;
            //}
            ////alert(classes + i);
            //const icon = current.icon !== null ? current.icon : "";
            //buttons.push(
            //    <ToggleButton 
            //        key={i} 
            //        name={buttonInfo.name}
            //        buttonId={i}
            //        buttonInfo={buttonInfo}
            //        setButtonInfo={setButtonInfo}
            //        isLastButton={isLastButton}
            //    >
            //        {icon}
            //    </ToggleButton>
            //);
        }
        return (
            <div className="admin-button-row">
                {row}
            </div>
        );
    };
    const buttons = getToggleButtons("Show", buttonInfo);
    //const adminButtons = getToggleButtons("Add", adminButtonInfo);
    const adminButtons = getAdminButtons("Add", adminButtonInfo);


    return (
        <div className='top prevent_select'>
            {/*
        <div className='top prevent_select' onClick={handleClick}>
        <div className='top'>
        */}
                {/*
            <div className="button_row">
                */}
            <div className="button_and_label_container">
                {/*
                <div className="button_and_label_container">
                */}
                    <div className="button_container_label">
                        show
                    </div>
                    <div className="button_inner_container">
                        {buttons}
                    </div>
                {/*
                </div>
                */}
                {/*
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
            <div className="button_and_label_container">
                {/*
                <div className="button_and_label_container">
                */}
                    <div className="button_container_label">
                        add
                    </div>
                    <div className="button_inner_container">
                        {adminButtons}
                    </div>
                {/*
                </div>
                */}
            {/*
            <div className="button_row">
            */}
                {/*
                <button className="button_label">
                    Add
                </button>
                <ToggleButton>
                    {
                    //room
                    <IoTextSharp style={{pointerEvents: 'none'}}/>
                    //"rooms"
                    }
                </ToggleButton>
                <ToggleButton>
                    {
                    //washroom
                    <BiMaleFemale style={{pointerEvents: 'none'}}/>
                    //"washrooms"
                    }
                </ToggleButton>
                <ToggleButton>
                    {
                    //food
                    <IoCafe style={{pointerEvents: 'none'}}/>
                    //"food etc."
                    }
                </ToggleButton>
                <ToggleButton>
                    {
                    //stairs, elevators, exits
                    <FaStairs style={{pointerEvents: 'none'}}/>
                    //"stairs etc."
                    //<GiStairs style={{pointerEvents: 'none'}}/>
                    //<MdOutlineStairs style={{pointerEvents: 'none'}}/>
                    }
                </ToggleButton>
                <ToggleButton>
                    {
                    //room
                    <MdChair style={{pointerEvents: 'none'}}/>
                    //"seating"
                    //<MdOutlineChair style={{pointerEvents: 'none'}}/>
                    //<PiChairBold style={{pointerEvents: 'none'}}/>
                    //<PiChair style={{pointerEvents: 'none'}}/>
                    }
                </ToggleButton>
                */}
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
