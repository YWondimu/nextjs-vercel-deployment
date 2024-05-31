'use client'
import { useState, useEffect, useRef } from 'react';


export default function Bottom() {
    const MAX_TAP_DELAY = 200; // Maximum delay between taps in milliseconds
    const MAX_TAP_INTERVAL = 200; // Maximum delay between taps in milliseconds

    let lastTapTime = 0;
    let tapTimeout;

    const [text, setText] = useState('nada');
    const [initialPosition, setInitialPosition] = useState({x: undefined, y: undefined});
    const [position, setPosition] = useState(
        //note: fill(null) needed for map to work apparently
        new Array(5).fill(null).map( () => ({x: undefined, y: undefined}) )
    );

    const [numOfFingers, setNumOfFingers] = useState(0);
    const [isTouching, setIsTouching] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [tapCount, setTapCount] = useState(0);
    const [tapStart, setTapStart] = useState(0);
    const [tapEnd, setTapEnd] = useState(new Date().getTime());
    const [prevIsTap, setPrevIsTap] = useState(false);
    const [tapInterval, setTapInterval] = useState(0);

    const handleTouchStart = (e) => {
        let numOfFingers = e.touches.length;
        setNumOfFingers(numOfFingers);

        setIsTouching(true);
        let currentTime = new Date().getTime();
        setTapStart(currentTime);
        setTapInterval(currentTime - tapEnd);

        const f = {x: e.touches[0].clientX, y: e.touches[0].clientY};
        const touches = e.touches;
        let text = '';
        for (let i = 0; i < position.length; i++) {
            position[i].x = e.touches[i]?.clientX;
            text += 'x: ' + position[i].x + '\n';
            position[i].y = e.touches[i]?.clientY;
            text += 'y: ' + position[i].y + '\n';
        }
        //setText(text);
        setPosition(position);
    }

    const handleTouchMove = (e) => {
        setIsDragging(true);
    }

    const handleTouchEnd = (e) => {
        setIsDragging(false);
        setIsTouching(false);
        let currentTime = new Date().getTime();
        setTapEnd(new Date().getTime());
        let tapDuration = currentTime - tapStart;

        //if tapDuration too long --> reset tap count
        if (tapDuration > MAX_TAP_DELAY) {
            setPrevIsTap(false);
            setTapCount(0);
        //else if tapDuration not too long, and other finger not still touching --> add to tapCount
        } else {
            setPrevIsTap(true);
            //if tapInterval too long, --> this is first tap
            if (tapInterval > MAX_TAP_INTERVAL) {
                setTapCount(1);
            } else {
                setText('num:' + numOfFingers);
                //i think this works, but ... works only sometimes.
                //it feels probabilistic. is there a better way?
                if (numOfFingers > 1) {
                    let delta = 1/numOfFingers;
                    setTapCount( prev => prev+delta );
                } else {
                    setTapCount( prev => prev+1 );
                }
                //alert('Start-End: ' + currentTime + ' ' + tapEnd + ' ' + (currentTime-tapEnd));
                //alert(text + tapStart + ' ' + currentTime + ' ' + (currentTime-tapStart));
            }
        }
    }

    return (
        <div className='bottom' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <p>{text}</p>
            <p>0 (init) x: {position[0].x} y: {position[0].y} (cur) x: y: </p>
            <p>num of fingers: {numOfFingers}</p>
            <p>number of taps: {tapCount}</p>
            <p>touch {''+isTouching} drag {''+isDragging}</p>
            zoom scale: 
            drag length: 
        </div>
    );
}
