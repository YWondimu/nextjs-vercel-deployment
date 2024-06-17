'use client'
import Top from './Top.js';
import Middle from './Middle.js';
import Bottom from './Bottom.js';
import './styles.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function App() {

    const [isPressed, setIsPressed] = useState(false);

    return (
        <>
            <motion.div 
                className="manual-viewport prevent_select"
                //drag
            >
                <Top isPressed={isPressed} setIsPressed={setIsPressed}></Top>
                <Middle isPressed={isPressed}></Middle>
                <Bottom></Bottom>
                <div className="border-top"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
                <div className="border-right"></div>
            </motion.div>
        </>
    );
}
