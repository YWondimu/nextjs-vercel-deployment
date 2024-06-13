'use client'
import Top from './Top.js';
import Middle from './Middle.js';
import Bottom from './Bottom.js';
import './styles.css';
import { motion } from 'framer-motion';

export default function App() {
    return (
        <>
            <motion.div 
                className="manual-viewport"
                drag
            >
                <Top></Top>
                <Middle></Middle>
                <Bottom></Bottom>
                <div className="border-top"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
                <div className="border-right"></div>
            </motion.div>
        </>
    );
}
