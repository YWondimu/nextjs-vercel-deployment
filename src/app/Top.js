'use client'
import { useState } from 'react';
import ToggleButton from './ToggleButton';
import { motion } from 'framer-motion';
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

export default function Top({ 
    setIsPressed, isPressed, 
    setMode, mode,
    setButtonInfo, buttonInfo,
    setCategories, categories,
    setAdminButtonInfo, adminButtonInfo,
    changeButtonStateForShowButtons,
    changeButtonStateForAddButtons,
    statesForShowButtons,
    statesForAddButtons,
    isAdmin,
    setIsAdmin,
}) {
    const initialMode = {};

    const [tappedWhenPressed, setTappedWhenPressed] = useState(false);
    const handleTouchStart = (e) => {
        if (isPressed) {
            setTappedWhenPressed(true);
            return;
        } else {
            setTappedWhenPressed(false);
            e.target.classList.add("pressed");
            setIsPressed(true);
        }
    }
    const handleTouchEnd = (e) => {
        if (tappedWhenPressed) {
            e.target.classList.remove("pressed");
            setIsPressed(false);
        }
    }

    const valuesForShow = [];
    const valuesForAdd = [];

    let amount = 5;
    for (let i = 0; i < amount; i++) {
        valuesForShow.push(false);
        valuesForAdd.push(false);
    }

    const getToggleButtons = (rowName, buttonInfo) => {
        let length = buttonInfo.length;
        let buttons = [];
        for (let i = 0; i < length; i++) {
            const category = buttonInfo[i];
            let isLastButton = false;
            if (i === length-1) {
                isLastButton = true;
            }
            const name = category.name;
            const icon = category.icon !== null ? category.icon : "";
            let debugging = true;
            buttons.push(
                <ToggleButton 
                    key={i} 
                    isShowButton={true}
                    categoryIndex={i}
                    subCategoryIndex={null}
                    name={name}
                    buttonId={i}
                    buttonInfo={buttonInfo}
                    setButtonInfo={setButtonInfo}
                    isLastButton={isLastButton}

                    isPressed={statesForShowButtons.get(category.name).isPressed}
                    changeButtonState={changeButtonStateForShowButtons}
                    debugging={debugging}
                >
                    {icon}
                </ToggleButton>
            );
        }
        return buttons;
    };
    const getAdminButtons2 = (rowName, buttonCategories) => {
        let numOfCategories = buttonCategories.length;
        //todo: figure out the lastButton class
        let row = [];
        buttonCategories.forEach( (category, index) => {
            const subCategoriesArray = category.subCategories;
            let columnLength = subCategoriesArray.length;
            let column = [];
                subCategoriesArray.forEach( (subCategory, subIndex) => {
                    column.push(
                        <ToggleButton 
                            className="admin-button"
                            isAddButton={true}
                            categoryIndex={index}
                            subCategoryIndex={subIndex}
                            key={subIndex} 
                            name={subCategory.name}
                            buttonId={subIndex}
                            //todo: change to buttonCategories or somethng, in toggle button compoennt?
                        //todo: or just delete the below i think. if i want hte toggle button to use the info, i should pass the specific info in? 
                        //ORRR i think i should pass the info and handle all the stuff in the toggle button? like getting hte icon and name. hmmm. ill go with the previous approach instead for now. ill pass in specific stuff. i htink. hyeah.
                            buttonInfo={subCategory}
                            //todo: change name of setButtonInfo property for readability? might cause confusion with the "actual" setButtonInfo function, compared with setAdminButtonInfo
                            setButtonInfo={setAdminButtonInfo}
                            //isLastButton={isLastButton}
                            //statesForShowButtons={statesForShowButtons}
                            //statesForAddButtons={statesForAddButtons}
                            isPressed={statesForAddButtons.get(subCategory.name).isPressed}
                            changeButtonState={changeButtonStateForAddButtons}
                        >
                            {subCategory.icon}
                        </ToggleButton>
                    );
                });
            row.push(
                <div className="admin-button-column">
                    {column}
                </div>
            );
        });
        return (
            <div className="admin-button-row">
                {row}
            </div>
        );
    };
    const buttons = getToggleButtons("Show", categories);
    const adminButtons = getAdminButtons2("Add", categories);


    return (
        <motion.div className='top prevent_select' >
            <div className="button_and_label_container">
                    <div className="button_container_label">
                        show
                    </div>
                    <div className="button_inner_container">
                        {buttons}
                    </div>
            </div>
                    {isAdmin && (
                        <div className="button_and_label_container">
                            <div className="button_container_label">
                                add
                            </div>
                            <div className="button_inner_container">
                                {adminButtons}
                            </div>
                        </div>
                    )}
        </motion.div>
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
