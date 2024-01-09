'use client'
import {motion} from 'framer-motion';

export default function Slider({handleZoom}) {
    return (
        <>
            {/* <motion.div drag> */}
            {/* <div>yellow</div> */}
            <div className='slider-div'>
                <input 
                    className='slider' 
                    type='range' 
                    min='0.5' 
                    max='4' 
                    step='0.01' 
                    orient='vertical' 
                    onChange={(e) => handleZoom(e)}
                >
                </input>
            </div>
            {/* </motion.div> */}
        </>
    );
}