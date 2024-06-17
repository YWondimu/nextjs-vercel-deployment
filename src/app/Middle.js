'use client'
const { v4: uuidv4 } = require('uuid');
import { useState, useEffect } from 'react';
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
export default function Middle({isPressed}) {

    const [listOfPoints, setListOfPoints] = useState([]);
    //const [listOfPoints, setListOfPoints] = useState([1,3]);

    // TODO: understand the resizeCanvas function!
    // Function to resize the canvas
    function resizeCanvas(canvas) {
        // Get the device pixel ratio
        const dpr = window.devicePixelRatio || 1;

        // Get the width and height in CSS pixels
        const rect = canvas.getBoundingClientRect();

        // Set the width and height in device pixels
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        // Scale the context to account for the device pixel ratio
        canvas.getContext('2d').scale(dpr, dpr);
    }

    const addPoints = (e) => {
        
        if (!isPressed) {
            return;
        }

        //make canvas
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        // TODO: when should I resize? probably should move this
        resizeCanvas(canvas);

        //resolution check
        if (false) {
            ctx.moveTo(0, 0);
            ctx.lineTo(200, 100);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.strokeStyle = 'green';
            ctx.stroke();
            ctx.closePath();
        }


        //get coordinate and other details of next point
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;

        let fill = 'orange';
        let stroke = 'black';
        let uuid = uuidv4();
        let type = 'washroom';

        const point = {x: x, y: y, fill: fill, stroke: stroke, uuid: uuid, type: type};

        //add to array
        //setListOfPoints( prev => [...prev, point]);
        setListOfPoints( prev => [...prev, point]);
        //setListOfPoints( prev => [...prev, 7]);
        //setListOfPoints('next');

        // Draw the circle at the clicked position
        //drawCircle(x, y);
    };

    function drawCircle(canvas, x, y, radius = 10, fillColor = 'lightblue', lineColor = 'black') {
        //alert(`why hello ${radius} ${x} ${y}`);
        //canvas.style.backgroundColor = 'red';
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }

    const drawPoints = (canvas) => {
        //let ctx = canvas.getContext('2d');
        //alert(listOfPoints);
        listOfPoints.forEach((point, index) => {
            drawCircle(canvas, point.x, point.y, 10, point.fill, point.stroke);
        });
    };

    useEffect(() => {
        const canvas = document.querySelector('canvas');
        //alert(listOfPoints);
        drawPoints(canvas);
    }, [listOfPoints]);

    return (
        <>

            <motion.div
                //className="svg image"
                onTouchStart={addPoints}
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
                <Image 
                    className="image svg"
                    src={fileLocation} 
                    alt=""
                    width={400}
                    height={500}
                />
                <canvas 
                >
                </canvas>
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

