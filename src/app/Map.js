'use client'
import { motion } from 'framer-motion';

export default function Map({currentUrl, zoom}) {

    return (
        <div className='map-port'>
            <motion.img
                className='image' 
                drag 
                dragMomentum={false}
                // animate={{scale: 1}}
                animate={{scale: zoom}}
                src={currentUrl}
                alt=''
            >
                {/* <img alt='' className='image' /> */}
                {/* <img src={currentUrl} alt='' /> */}
            </motion.img>
        </div>
    );
}