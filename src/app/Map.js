'use client'
import { motion } from 'framer-motion';

export default function Map({currentUrl, zoom}) {

    return (
        <div className='map-port'>
            <motion.div 
                className='map-div' 
                drag 
                dragMomentum={false}
                // animate={{scale: 1}}
                animate={{scale: zoom}}
            >
                <motion.div drag>
                <img src={currentUrl} alt='' className='image' />
                </motion.div>
                {/* <img src={currentUrl} alt='' /> */}
            </motion.div>
        </div>
    );
}