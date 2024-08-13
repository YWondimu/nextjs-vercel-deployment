'use client'
const { v4: uuidv4 } = require('uuid');
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NextImage from 'next/image'; //importing as "NextImage" in order not to conflict with the global Image constructor
import { BiMaleFemale, BiFemale, BiMale } from 'react-icons/bi';
import { renderToStaticMarkup } from 'react-dom/server'

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
let fileLocation = folder + 'floor-' + floorName[1] + '.svg';

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
export default function Middle({
    isPressed,
    categories,
    setCategories,
}) {

    //const [listOfPoints, setListOfPoints] = useState([]);
    ////const [listOfPoints, setListOfPoints] = useState([1,3]);
    //
    //// TODO: understand the resizeCanvas function!
    //// Function to resize the canvas
    function resizeCanvas(canvas) {
        // Get the device pixel ratio -- dpr physical pixels to logical pixels. so 1px in css is e.g. 2px on the device, if the device has high resolution.
        const dpr = window.devicePixelRatio || 1;
        //alert('dpr: ' + dpr);

        // Get the width and height in CSS pixels -- this is the area that the canvas images the canvas covers when drawing on it. it assumes dpr is 1, i think.
        const rect = canvas.getBoundingClientRect();
        //alert('rect.width: ' + rect.width + ' rect.height: ' + rect.height);
        //alert('canvas.width: ' + canvas.width + ' canvas.height: ' + canvas.height);


        // Set the width and height in device pixels -- canvas.width is already equal to rect.width x dpr, BUT, we do this here to avoid a "recursive" problem
        // it somehow "resets" the scale.
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        //alert('canvas.width: ' + canvas.width + ' canvas.height: ' + canvas.height);
        //alert('ctx.canvas.width: ' + ctx.canvas.width + ' ctx.canvas.height: ' + ctx.canvas.height);
        //alert('new');

        // Scale the context to account for the device pixel ratio -- this is what we really want, we want the canvas context scaled by dpr,
        // so that drawings are not distorted on the device when scaled up from logical to physical size.
        // but! if we didnt set canvas.width to rect.width x dpr, then, everytime we reached this line, we would scale the canvas again, and again, and again.
        // so that its 2x the size, the 4x, then 8x etc. (if dpr is 2).
        // Setting canvas.width to rect.width x dpr means that we always start with the "real" base first?
        // q: but if canvas.width is already rect.width, then why scale? What are we scaling? I guess setting canvas height and width, resets the canvas height and width?
        // a: according to chatgpt (and my own logic) it "resets" the scale somehow. lol. imo there should be an explicit scale reset function for that but whatever.
        canvas.getContext('2d').scale(dpr, dpr);
    }
    //
    //const addPoints = (e) => {
    //
    //    //if (!isPressed) {
    //    //    return;
    //    //}
    //
    //    //alert('add points');
    //    //make canvas
    //    const canvas = document.querySelector('canvas');
    //    const ctx = canvas.getContext('2d');
    //
    //    // TODO: when should I resize? probably should move this
    //    //resizeCanvas(canvas);
    //
    //    //resolution check
    //    if (false) {
    //        ctx.moveTo(0, 0);
    //        ctx.lineTo(200, 100);
    //        ctx.stroke();
    //
    //        ctx.beginPath();
    //        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    //        ctx.fillStyle = 'red';
    //        ctx.fill();
    //        ctx.strokeStyle = 'green';
    //        ctx.stroke();
    //        ctx.closePath();
    //    }
    //
    //
    //    //get coordinate and other details of next point
    //    const rect = canvas.getBoundingClientRect();
    //    const x = e.touches[0].clientX - rect.left;
    //    const y = e.touches[0].clientY - rect.top;
    //
    //    let fill = 'orange';
    //    let stroke = 'black';
    //    let uuid = uuidv4();
    //    let type = 'washroom';
    //
    //    const point = {x: x, y: y, fill: fill, stroke: stroke, uuid: uuid, type: type};
    //
    //    //add to array
    //    //setListOfPoints( prev => [...prev, point]);
    //    setListOfPoints( prev => [...prev, point]);
    //    //setListOfPoints( prev => [...prev, 7]);
    //    //setListOfPoints('next');
    //
    //    // Draw the circle at the clicked position
    //    //drawCircle(x, y);
    //};
    //
    //function drawCircle(canvas, x, y, radius = 10, fillColor = 'lightblue', lineColor = 'black') {
    //    //alert(`why hello ${radius} ${x} ${y}`);
    //    //canvas.style.backgroundColor = 'red';
    //    let ctx = canvas.getContext('2d');
    //    ctx.beginPath();
    //    ctx.arc(x, y, radius, 0, Math.PI * 2);
    //    ctx.fillStyle = fillColor;
    //    ctx.fill();
    //    ctx.strokeStyle = lineColor;
    //    ctx.lineWidth = 2;
    //    ctx.stroke();
    //    ctx.closePath();
    //}
    //
    //const drawPoints = (canvas) => {
    //    //let ctx = canvas.getContext('2d');
    //    //alert(listOfPoints);
    //    listOfPoints.forEach((point, index) => {
    //        drawCircle(canvas, point.x, point.y, 10, point.fill, point.stroke);
    //    });
    //};
    //
    //useEffect(() => {
    //    const canvas = document.querySelector('canvas');
    //    //alert(listOfPoints);
    //    drawPoints(canvas);
    //}, [listOfPoints]);
    //
    ////for hide button

    const testDraw = (e) => {
        const canvas = document.querySelector('canvas');
        resizeCanvas(canvas);
        const rect = canvas.getBoundingClientRect();

        //resizeCanvas(canvas);

        const clientX = e.touches[0].clientX;
        const clientY = e.touches[0].clientY;
        //alert('clientX: ' + clientX + ' clientY: ' + clientY);
        //alert('rect.left: ' + rect.left + ' rect.top: ' + rect.top);

        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        //const x = 100;
        //const y = 100;
        //alert('x: ' + x + ' y: ' + y);

        let radius = 10;
        let fillColor = 'lightblue'; 
        let lineColor = 'black';

        let ctx = canvas.getContext('2d');
        //const dpr = window.devicePixelRatio || 1;
        //alert('dpr: ' + dpr);
        ////canvas.width = rect.width * dpr;
        ////canvas.height = rect.height * dpr;
        ////alert('canvas.width: ' + canvas.width + ' canvas.height: ' + canvas.height);
        ////alert('ctx.canvas.width: ' + ctx.canvas.width + ' ctx.canvas.height: ' + ctx.canvas.height);
        //ctx.scale(dpr, dpr);

        //ctx.beginPath();
        //ctx.moveTo(10, 10);
        //ctx.lineTo(100, 100);
        //ctx.stroke();

        //radius = 100;

        //const icon = categories[0].subCategories[0].icon;
        //const width = 100;
        //const height = 100;
        //ctx.drawImage(icon, x, y, width, height);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        //drawCircle(canvas, x, y);
        //alert('x: ' + x + ' y: ' + y);
        //alert('line');
        //alert('in testDraw red');
        //canvas.style.backgroundColor = 'red';

    };

    let url;
    const testDrawImage = (e) => {

        //get img
        //const icon = categories[0].subCategories[0].icon;
        //const icon = <BiMaleFemale size={50}/>
        const icon = <BiMaleFemale />
        const iconString = renderToStaticMarkup(icon);
        const svg = new Blob([iconString],  { type: 'image/svg+xml;charset=utf-8'});
        url = URL.createObjectURL(svg);


        //get canvas
        const canvas = document.querySelector('canvas');
        resizeCanvas(canvas);
        const rect = canvas.getBoundingClientRect();
        let ctx = canvas.getContext('2d');

        //get location
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;

        //draw on canvas
        const width = 100;
        const height = 100;
        //ctx.drawImage(img, x, y, width, height);
        const img = new Image();
        img.src = url;
        //wait for load before drawing
        //alert('good so far 21');
        img.onload = () => {
            //ctx.fillSttyle = 'rgba(255, 255, 255, 0.8)';
            //ctx.fillRect(x, y, width, height);
            ctx.drawImage(img, x, y, width, height);
            URL.revokeObjectURL(url);
        };

        //draw circle
        //alert('draw circle');
        //let radius = 10;
        //let fillColor = 'lightblue'; 
        //let lineColor = 'black';
        //ctx.beginPath();
        //ctx.arc(x+100, y+100, radius, 0, Math.PI * 2);
        //ctx.fillStyle = fillColor;
        //ctx.fill();
        //ctx.strokeStyle = lineColor;
        //ctx.lineWidth = 2;
        //ctx.stroke();
        //ctx.closePath();
    };
    useEffect ( () => {
        return () => {
            URL.revokeObjectURL(url);
        };
    }, );

    return (
        <>

            <motion.div
                //className="svg image"
                //onTouchStart={addPoints}
                //onTouchStart={testDraw}
                onTouchStart={testDrawImage}
                className='middle' 
                drag 
                dragMomentum={false}
                dragElastic={0}
                dragTransition={{bounceStiffness: 600, bounceDamping:20, timeConstant: 0}}
                //dragTransition={{ timeConstant: 0 }}midd
                // animate={{scale: 1}}
                src={fileLocation}
                alt=''
                style={{
                    willChange: "transform",
                    transitionDelay: "0ms",
                }}
                //dragConstraints={{left: -50, right: 50, top: -50, bottom: 50 }}
            >
                {/*
                    fileLocation
                */}
                <NextImage 
                    className="image svg"
                    src={fileLocation} 
                    alt=""
                    width={400}
                    height={500}
                    //width={20}
                    //height={25}
                />
                <canvas 
                    className="canvas"
                    id="canvas"
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

