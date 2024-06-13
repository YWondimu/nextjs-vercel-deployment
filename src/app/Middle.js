'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

// TODO: fix the other fiels so that tehy are "zoomed" like b-zoomed is.
// TODO: make it so that dragging the map slides it UNDER the top and bottom divs, not above
// --> TODO: I can review stacking contexts, and I can look at the new pop or layout or whatever api.

let folder ='/unb-floors-with-shadow/';
// let folder ='/unb-floors/';
let floorName = [
    'f',
    'e',
    'd',
    'c',
    'b',
];
let fileLocation = folder + 'floor-' + floorName[0] + '.svg';

// public/next.svg
// public/unb-floors/floor-b.svg
// public/unb-floors/floor-c.svg
// public/unb-floors/floor-d.svg
// public/unb-floors/floor-e.svg
// public/unb-floors/floor-f.svg
// public/unb-floors-with-shadow/floor-b-zoomed.svg
// public/unb-floors-with-shadow/floor-b.svg
// public/unb-floors-with-shadow/floor-c.svg
// public/unb-floors-with-shadow/floor-d.svg
// public/unb-floors-with-shadow/floor-e.svg
// public/unb-floors-with-shadow/floor-f.svg
// public/vercel.svg

// let fileLocation = '';

//below file location line is for debugging
export default function Middle() {
    return (
        <>

            <motion.div
                //className="svg image"
                className='middle' 
                drag 
                dragMomentum={false}
                dragElastic={0}
                dragTransition={{bounceStiffness: 600, bounceDamping:20, timeConstant: 0}}
                //dragTransition={{ timeConstant: 0 }}
                // animate={{scale: 1}}
                src={fileLocation}
                alt=''
                style={{
                    willChange: "transform",
                    transitionDelay: "0ms",
                }}
                //dragConstraints={{left: -50, right: 50, top: -50, bottom: 50 }}
            >
                {fileLocation}
                <canvas></canvas>
                <Image 
                    className="image svg"
                    src={fileLocation} 
                    alt=""
                    width={400}
                    height={500}
                />
            </motion.div>
            {/*
            <div className="middle"
            >
            </div>
            <motion.img 
                className="svg image"
                //className='image' 
                drag 
                dragMomentum={false}
                dragElastic={0}
                dragTransition={{bounceStiffness: 600, bounceDamping:20, timeConstant: 0}}
                //dragTransition={{ timeConstant: 0 }}
                // animate={{scale: 1}}
                src={fileLocation}
                alt=''
                style={{
                    willChange: "transform",
                    transitionDelay: "0ms",
                }}
                //dragConstraints={{left: -50, right: 50, top: -50, bottom: 50 }}
            >
            </motion.img>
            */}
        </>
    );
}

