'use client'
import { motion } from 'framer-motion';

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
      <div className="middle">
        {fileLocation}
        <motion.img className="svg"
            className='image' 
            drag 
            dragMomentum={false}
            // animate={{scale: 1}}
            src={fileLocation}
            alt=''
        >
        </motion.img>
      </div>
      </>
    );
}
