'use client'
import { useState } from 'react';
import ToggleButton from './ToggleButton';
import { motion } from 'framer-motion';
//washroom import { BiMaleFemale, BiFemale, BiMale } from 'react-icons/bi';
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
    categories,
    setAdminButtonInfo,
    changeButtonStateForAddButtons,
    statesForAddButtons,
    isAdmin,
    buttonState,
    setButtonState,
    changeButtonIsActive,
}) {

    const valuesForShow = [];
    const valuesForAdd = [];

    let amount = 5;
    for (let i = 0; i < amount; i++) {
        valuesForShow.push(false);
        valuesForAdd.push(false);
    }

    const getAdminButtons2 = (rowName, buttonCategories) => {
        //todo: figure out the lastButton class
        let row = [];
        buttonCategories.forEach( (category, index) => {
            const subCategoriesArray = category.subCategories;
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
    const adminButtons = getAdminButtons2("Add", categories);
    //const creationButtons2DArray = getCreationButtons2DArray(buttonState);
    //const creationButtons2DArray = 2;
    //alert('return: ' + creationButtons2DArray);
    const getCreationButtons2DArray = (buttonState, changeButtonIsActive) => {

        //get creationButtons object by destructuring buttonState object
        const { creationButtons } = buttonState;

         //Create groupedButtons object, where each field is a category name, and has an array of button objects
        const groupedButtons = {};
        Object.keys(creationButtons).forEach((buttonKey) => {
            //alert(buttonKey);
            const buttonInfo = creationButtons[buttonKey];
            //const { category } = buttonInfo;
            const category = buttonInfo.category;

            //if the category is not yet in the groupedButtons object, add the category, with an empty array as its value
            if (!groupedButtons[category]) {
                groupedButtons[category] = [];
            }

            //groupedButtons has "category" fields, that each have an array of {key, buttonInfo} objects
            groupedButtons[category].push({
                key: buttonKey,
                //button: buttonInfo,
                ...buttonInfo,
            });
        });

        //iterate through each category field in groupedButtons E.g. groupedButtons.stairs, groupedButtons.rooms, whatever
        const row = Object.keys(groupedButtons).map( (category) => {
            //for each category, make a column array that has a ToggleButton for each button
            const categoryButtons = groupedButtons[category];
            const column = categoryButtons.map((currentButton, index) => {
                const isLastButton = index == categoryButtons.length - 1;
                return (
                    <ToggleButton 
                        key={currentButton.key} 
                        name={currentButton.key}
                        isLastButton={isLastButton}
                        typeOfButton={'creationButtons'}
                        changeButtonIsActive={changeButtonIsActive}
                        isActive={currentButton.isActive}
                        //debugging
                        debugging={false}
                        //q: I don't think I need these? remove?
                        className="admin-button"
                        isAddButton={true}
                        buttonId={currentButton.key}
                        buttonInfo={currentButton}
                        setButtonInfo={setAdminButtonInfo}
                        isPressed={currentButton.isActive}
                        changeButtonState={changeButtonStateForAddButtons}
                    >
                        {buttons.icon}
                    </ToggleButton>
                );
            });
            return (
                <div key={category} className="admin-button-column">
                    {column}
                </div>
            );
        });
//can i go thorugh an array of react components nad change a specific prop?
        // Create the 2D array (row of columns)
        //debug
        //alert(JSON.stringify(groupedButtons));
        //const rows = Object.keys(groupedButtons).map((category, index) => (
        //    <div key={category} className="admin-button-column">
        //        {groupedButtons[category]}
        //    </div>
        //));

        return (
            <div className="admin-button-row">
                {row}
            </div>
        );
        //return 'test';
    };
    //const testFunction = (num) => {
    //    return num + 1;
    //};
    //const creationButtons2DArray = 2;
    const creationButtons2DArray = getCreationButtons2DArray(buttonState, changeButtonIsActive);
    //const creationButtons2DArray = testFunction(1);
    //const myVar = '2'; const myVar2 = 2;
    //alert('return: ' + 2);
    //alert('return myVar: ' + myVar);
    //alert('return myVar2: ' + myVar2);
    //alert('return creationButtons2DArray: ' + creationButtons2DArray);
    //alert('return creationButtons2DArray testFunction: ' + creationButtons2DArray);
    const visibilityToggleButtons = Object.entries(buttonState.visibilityButtons).map( ([key, value], index, array) => {
        const buttonName = key;
        const button = value;
        //alert('length: ' + array.length);
        const isLastButton = index === array.length - 1;
        return (
            <ToggleButton 
                key={buttonName} 
                name={buttonName}
                isLastButton={isLastButton}
                typeOfButton={'visibilityButtons'}
                changeButtonIsActive={changeButtonIsActive}
                isActive={button.isActive}
                //debugging
                debugging={false}
            >
                {button.icon}
            </ToggleButton>
        );
    });
    //const getAdminButtons2 = (buttonState) => {
    //    const { creationButtons } = buttonState;
    //
    //    // Group buttons by category
    //    const groupedButtons = {};
    //    Object.keys(creationButtons).forEach((buttonKey) => {
    //        const button = creationButtons[buttonKey];
    //        const { category } = button;
    //
    //        if (!groupedButtons[category]) {
    //            groupedButtons[category] = [];
    //        }
    //
    //        groupedButtons[category].push(
    //            <ToggleButton 
    //                className="admin-button"
    //                isAddButton={true}
    //                key={buttonKey}
    //                name={buttonKey}
    //                buttonId={buttonKey}
    //                buttonInfo={button}
    //                setButtonInfo={setAdminButtonInfo}
    //                isPressed={buttonState.creationButtons[buttonKey].isActive}
    //                changeButtonState={changeButtonStateForAddButtons}
    //            >
    //                {button.icon}
    //            </ToggleButton>
    //        );
    //    });
    //
    //    // Create the 2D array (row of columns)
    //    const rows = Object.keys(groupedButtons).map((category, index) => (
    //        <div key={category} className="admin-button-column">
    //            {groupedButtons[category]}
    //        </div>
    //    ));
    //
    //    return (
    //        <div className="admin-button-row">
    //            {rows}
    //        </div>
    //    );
    //};
    //const testFunction = (num) => {
    //    return num + 1;
    //};
    //const creationButtons = Object.entries(buttonState.creationButtons).map( ([key, value], index, array) => {
    //    const buttonName = key;
    //    const button = value;
    //    //alert('length: ' + array.length);
    //    const isLastButton = index === array.length - 1;
    //    return (
    //        <ToggleButton 
    //            key={buttonName} 
    //            name={buttonName}
    //            isLastButton={isLastButton}
    //            typeOfButton={'visibilityButtons'}
    //            changeButtonIsActive={changeButtonIsActive}
    //            isActive={button.isActive}
    //            //debugging
    //            debugging={false}
    //        >
    //            {button.icon}
    //        </ToggleButton>
    //    );
    //});
    //const getAdminButtons2 = (rowName, buttonCategories) => {
    //    //todo: figure out the lastButton class
    //    let row = [];
    //    buttonCategories.forEach( (category, index) => {
    //        const subCategoriesArray = category.subCategories;
    //        let column = [];
    //            subCategoriesArray.forEach( (subCategory, subIndex) => {
    //                column.push(
    //                    <ToggleButton 
    //                        className="admin-button"
    //                        isAddButton={true}
    //                        categoryIndex={index}
    //                        subCategoryIndex={subIndex}
    //                        key={subIndex} 
    //                        name={subCategory.name}
    //                        buttonId={subIndex}
    //                        //todo: change to buttonCategories or somethng, in toggle button compoennt?
    //                        //todo: or just delete the below i think. if i want hte toggle button to use the info, i should pass the specific info in? 
    //                        //ORRR i think i should pass the info and handle all the stuff in the toggle button? like getting hte icon and name. hmmm. ill go with the previous approach instead for now. ill pass in specific stuff. i htink. hyeah.
    //                        buttonInfo={subCategory}
    //                        //todo: change name of setButtonInfo property for readability? might cause confusion with the "actual" setButtonInfo function, compared with setAdminButtonInfo
    //                        setButtonInfo={setAdminButtonInfo}
    //                        isPressed={statesForAddButtons.get(subCategory.name).isPressed}
    //                        changeButtonState={changeButtonStateForAddButtons}
    //                    >
    //                        {subCategory.icon}
    //                    </ToggleButton>
    //                );
    //            });
    //        row.push(
    //            <div className="admin-button-column">
    //                {column}
    //            </div>
    //        );
    //    });
    //    return (
    //        <div className="admin-button-row">
    //            {row}
    //        </div>
    //    );
    //};


    //const giveDebugMessage = () => {
        //const message = creationButtons2DArray;
        //alert(message);
    //}
    return (
        //<motion.div className='top prevent_select' onTouchStart={giveDebugMessage}>
        <motion.div className='top prevent_select'>
            <div className="button_and_label_container">
                    <div className="button_container_label">
                        show
                    </div>
                    <div className="button_inner_container">
                        {visibilityToggleButtons}
                    </div>
            </div>
                    {isAdmin && (
                        <div className="button_and_label_container">
                            <div className="button_container_label">
                                add
                            </div>
                            <div className="button_inner_container">
                                {/*
                                    {adminButtons}
                                */}
                                {creationButtons2DArray}
                            </div>
                        </div>
                    )}
        </motion.div>
    );
}
