'use client'
import { motion } from 'framer-motion';

export default function Map({position, currentUrl, zoom, setZoom, touchFunctions, dragConstraintsRef}) {

    const handlePinch = (e, info) => {
        setZoom=info.scale;
    }
    return (
        <div 
            className='map-port' 
            // onTouchStart={onTouchStart}
            // onTouchEnd={onTouchEnd}
            onTouchStart={touchFunctions.start}
            onTouchMove={touchFunctions.move}
            onTouchEnd={touchFunctions.end}
            ref={dragConstraintsRef}
        >
            {/* <motion.div */}
            <motion.img
                className='image' 
                drag 
                dragMomentum={false}
                // animate={{scale: 1}}
                animate={{scale: zoom, x: position.x, y: position.y}}
                src={currentUrl}
                alt=''
                onPinch={handlePinch}
            >
                {/* <img alt='' className='image' /> */}
                {/* <img src={currentUrl} alt='' /> */}
            {/* </motion.div> */}
            </motion.img>
        </div>
    );
}