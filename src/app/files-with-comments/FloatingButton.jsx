import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingButton( {
    children,
    handleZoom,
} ) {
    const [isTouched, setIsTouched] = useState(false);
    const handleTouch = () => {
        //alert('new');
        setIsTouched(true);
        setTimeout( () => setIsTouched(false), 100);
        handleZoom();
    }
    return (
        <>
        <motion.div 
            //className={"floating-button" + (isTouched ? 'flash' : "")}
            className={"floating-button"}
            onTouchStart={handleTouch}
            initial={{ scale: 1}}
            animate={{ scale: isTouched ? 1.5 : 1}}
            //transition={{ duration: 2 }}
            //style={{
            //    willChange: "transform",
            //    transitionDelay: "0ms",
            //}}
        >

            {/*
            <FaPlus size={20}/>
            */}
            {children}
        </motion.div>
        {/*
        <div
            className={"floating-button"}
        >
            <FaPlus size={50}/>
        </div>
        */}
        </>
    );
};
