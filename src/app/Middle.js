'use client'
const { v4: uuidv4 } = require('uuid');
import { useState, useEffect, useRef } from 'react';
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
    scale,
}) {

    const canvasRef = useRef(null);

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
        return; //stop for now

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
        const width = 25;
        const height = 25;
        //ctx.drawImage(img, x, y, width, height);
        const img = new Image();
        img.src = url;
        //wait for load before drawing
        //alert('good so far 21');
        //alert('new');
        img.onload = () => {
            //ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            //ctx.fillStyle = 'orange';
            //ctx.fillRect(x, y, width, height);
            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
            ctx.drawImage(img, x, y, width, height);
            URL.revokeObjectURL(url);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);
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

    const drawFeature = (ctx, feature) => {
        alert('drawing features');
        const {x, y} = feature.position;
        const size = 500; // Sizes of the square
        const radius = 10; // Radius for the rounded corners

        // Draw shadow
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;


        let controlX = 0;
        let controlY = 0;
        let endX = 0;
        let endY = 0;

        let cornerX1 = x;
        let cornerY1 = y;
        let cornerX2 = x+size;
        let cornerY2 = y;
        let cornerX3 = x+size;
        let cornerY3 = y+size;
        let cornerX4 = x;
        let cornerY4 = y+size;

        // Draw square with rounded corners
        ctx.beginPath();
        ctx.moveTo(x+radius, y);
        ctx.lineTo(x+size-radius, y); //top line
        ctx.quadraticCurveTo(x+size, y, x+size, y+radius) ;//top right corner
        ctx.lineTo(x+size, y+size-radius); //right line
        ctx.quadraticCurveTo(x+size, y+size, x+size-radius, y+size); //bottom right corner
        ctx.lineTo(x+radius, y+size); //bottom line
        ctx.quadraticCurveTo(x, y+size, x, y+size-radius); //bottom left corner
        ctx.lineTo(x, y+radius); //left line
        ctx.quadraticCurveTo(x, y, x+radius, y) //top left corner
        ctx.closePath();
    }

    useEffect( () => {
        const canvas = canvasRef.current;

        // Set the canvas's internal resolution to match its displayed size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        const ctx = canvas.getContext('2d');

        const testDraw2 = (e) => {
            const x = (e.touches[0].clientX - rect.left);
            const y = (e.touches[0].clientY - rect.top);

            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas


            const square = true;
            if (square) {
                // Draw shadow
                ctx.save();
                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 5;
                ctx.shadowOffsetY = 5;
                // Draw square with rounded corners
                ctx.beginPath();
                const size = 500; // Sizes of the square
                const radius = 10; // Radius for the rounded corners
                ctx.moveTo(x+radius, y);
                ctx.lineTo(x+size-radius, y); //top line
                ctx.quadraticCurveTo(x+size, y, x+size, y+radius) ;//top right corner
                ctx.lineTo(x+size, y+size-radius); //right line
                ctx.quadraticCurveTo(x+size, y+size, x+size-radius, y+size); //bottom right corner
                ctx.lineTo(x+radius, y+size); //bottom line
                ctx.quadraticCurveTo(x, y+size, x, y+size-radius); //bottom left corner
                ctx.lineTo(x, y+radius); //left line
                ctx.quadraticCurveTo(x, y, x+radius, y) //top left corner
                ctx.closePath();
                ctx.restore();
            } else {
                // Draw the circle
                ctx.beginPath();
                const radius = 50;
                const startAngle = 0;
                const endAngle = 2*Math.PI;
                ctx.beginPath();
                ctx.arc(x, y, radius, startAngle, endAngle);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.closePath();
            }
        };

        canvas.addEventListener('touchstart', testDraw2);
        return () => {
            canvas.removeEventListener('touchstart', testDraw2);
        };
    }, []);
    const testDraw2 = (e) => {
        //alert('in test draw2');
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const rect = canvas.getBoundingClientRect();

        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        alert(canvas.width);
        alert(rect.width);

        const x = (e.touches[0].clientX - canvas.getBoundingClientRect().left) * scaleX;
        const y = (e.touches[0].clientY - canvas.getBoundingClientRect().top) * scaleY;

        ctx.clearRect(0,0,canvas.width, canvas.height);

        //const x = 400;
        //const y = 300;
        //const x = e.touches[0].clientX;
        //const y = e.touches[0].clientY;
        //alert('x: ' + e.touches[0].clientX);
        //alert('x: ' + x);
        const radius = 5;
        const startAngle = 0;
        const endAngle = 2*Math.PI;
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }

    const [features, setFeatures] = useState([]);
    const addFeature = (position, icon, category) => {
        const newFeature = {
            id: `feature-${features.length}`,
            category,
            position,
            icon,
        };
        setFeatures([...features, newFeature]);
    };
    const handleMapTouch = (e) => {
        testDraw2(e);
        //alert('type: ' + e.type);
        //alert(JSON.stringify(Object.keys(e)));
        //alert(e.touches[0].clientX);
        //alert(JSON.stringify(features));
        //const touch = e.touches[0];
        //const position = {x: touch.clientX, y: touch.clientY};
        //const currentIcon = 'testIcon';
        //const currentCategory = 'testCategory';
        //addFeature(position, currentIcon, currentCategory);
    }
    useEffect( () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        features.forEach( (feature) => {
            drawFeature(ctx, feature);
        });
    }, [features]);


    //CHATGPT SUGGESTIONS FOR HANDLING ZOOM AND PAN
    //let offsetX = 0;
    //let offsetY = 0;
    //const handlePan = (dx, dy) => {
    //  offsetX += dx;
    //  offsetY += dy;
    //  // Clear the canvas
    //  ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  // Save the current context state
    //  ctx.save();
    //  // Apply the translation (panning)
    //  ctx.translate(offsetX, offsetY);
    //  // Redraw the content
    //  drawContent(ctx);
    //  // Restore the context to its original state (if needed for further operations)
    //  ctx.restore();
    //};
    //const zoomLevel = 1.0;
    //const handleZoom = (zoomFactor) => {
    //  zoomLevel *= zoomFactor;
    //  // Clear the canvas
    //  ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  // Save the current context state
    //  ctx.save();
    //  // Scale the canvas context
    //  ctx.scale(zoomLevel, zoomLevel);
    //  // Redraw the content
    //  drawContent(ctx);
    //  // Restore the context to its original state (if needed for further operations)
    //  ctx.restore();
    //};

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

                animate={{ scale }}
                transition={{ duration: 0.2 }}
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
                    //onTouchStart={handleMapTouch}
                    ref={canvasRef}
                >
                </canvas>
            </motion.div>
        </>
    );
}

