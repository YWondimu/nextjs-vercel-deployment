'use client'
import { useState, useEffect, useRef } from 'react';

export default function Bottom({children}) {
    const MAX_TAP_DURATION = 400; // Maximum delay between taps in milliseconds
    const MAX_TAP_INTERVAL = 300; // Maximum delay between taps in milliseconds

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
    const startRunning = useRef(false);
    const moveRunning = useRef(false);
    const endRunning = useRef(false);
    const state = {
        tapping: 0,
        finished: 1,
    }
    
    //q: which to use of these two?
    const [tapState, setTapState] = useState(state.finished);
    const [tapFinished, setTapFinished] = useState(true);

    const tapRefState = useRef('endHandle-ended');
    const tapRefCount = useRef(0);
    const tapRefFingerNum = useRef(0);

    //debugging
    const [color, setColor] = useState('');
    const style = {
        background: color,
    };

    const [dragStartLocation, setDragStartLocation] = useState({x: undefined, y: undefined});
    const [dragPrevLocation, setDragPrevLocation] = useState({x: undefined, y: undefined});
    const [dragCurrentLocation, setDragCurrentLocation] = useState({x: undefined, y: undefined});
    const [dragEndLocation, setDragEndLocation] = useState({x: undefined, y: undefined});

    useEffect( () => {
            //continue only if tap
            if (tapStart - tapEnd < tapInterval) {
                //return;
            }
            
        //q: which to use of these two?
        //if (tapState == state.finished) {
        //alert('in useEffect');
        //if (tapFinished == true && tapFinished == true) {
            switch (tapCount) {
                case 1:
                    if (numOfFingers == 1) {
                        setColor('yellow');
                    } else {
                        setColor('white');
                    }
                    break;
                case 2:
                    if (numOfFingers == 1) {
                        setColor('orange');
                    } else {
                        setColor('cyan');
                    }
                    break;
                case 3:
                    if (numOfFingers == 1) {
                        setColor('red');
                    } else {
                        setColor('blue');
                    }
                    break;
            }
        //}
    //q: which to use of these two?
    //}, [tapState]);
    //}, [tapFinished]);
    //}, [tapCount]);
    }, [tapEnd]);

    const handleTouchStart = (e) => {

        setText(e.touches[0].clientX);
        setDragStartLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});
        startRunning.current = true;
        let numOfFingers = e.touches.length;
        setNumOfFingers(numOfFingers);

        tapRefCount.current = e.touches.length;

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
        setPosition(position);
        startRunning.current = false;
    }

    const handleTouchMove = (e) => {

        setDragEndLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});
        let prev = dragCurrentLocation;
        let current = {x:e.touches[0]?.clientX, y: e.touches[0]?.clientY};
        let deltaX = current.x - dragStartLocation.x;
        let deltaY = current.y - dragStartLocation.y;
        const bottomDiv = document.querySelector('.bottom');

        setDragPrevLocation(prev);
        setDragCurrentLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});


        moveRunning.current = true;
        setIsDragging(true);
        moveRunning.current = false;
    }

    const handleTouchEnd = (e) => {
        setDragCurrentLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});

        if (tapRefCount.current == 0) {
            //then this is the first touch
            //tapRefCount.current = e.touches.length;
            //alert('in end - in first if: ' + tapRefCount.current);
        } 
        if (tapRefCount.current != 1) {
            //then this is not the last touch 
            //(note: if there is only one touch, then the last touch would be same as the first touch, and vice versa)
            tapRefCount.current = tapRefCount.current - 1;
            //alert('in end - in second if: ' + tapRefCount.current);
            return;
        } else {
            //if tapRefCount.current == 1, then this is the last touch
            //rest tapRefCount.current for the next tap set
            tapRefCount.current = 0;
            //alert('in end - in else: ' + tapRefCount.current);
        }
        endRunning.current = true;
        setIsDragging(false);
        setIsTouching(false);
        let currentTime = new Date().getTime();
        setTapEnd(new Date().getTime());
        let tapDuration = currentTime - tapStart;

        //if tapDuration too long --> reset tap count
        if (tapDuration > MAX_TAP_DURATION) {
            setPrevIsTap(false);
            setTapCount(0);
        //else if tapDuration not too long, and other finger not still touching --> add to tapCount
        } else {
            setPrevIsTap(true);
            //if tapInterval too long, --> this is first tap
            if (tapInterval > MAX_TAP_INTERVAL) {
                setTapCount(1);

                //q: which to use of these two?
                setTapState(state.tapping);
                setTapFinished(false);

            } else {
                setText('num:' + numOfFingers);
                //i think this works, but ... works only sometimes.
                //it feels probabilistic. is there a better way?

                //if (numOfFingers > 1) {
                //    let delta = 1/numOfFingers;
                //    setTapCount( prev => prev+delta );
                //} else {
                    setTapCount( prev => prev+1 );
                //}

            }
        }
        endRunning.current = false;
    }

    return (
        <div 
            style={style} 
            className='bottom' 
            onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove} 
            onTouchEnd={handleTouchEnd}
        >
            {children}
            <p>{text}</p>
            <p>start x: {dragStartLocation.x} y: {dragStartLocation.y}</p>
            <p>current x: {dragCurrentLocation.x} y: {dragCurrentLocation.y}</p>
            <p>prev x: {dragPrevLocation.x} y: {dragPrevLocation.y}</p>
            <p>end x: {dragEndLocation.x} y: {dragEndLocation.y}</p>
            <p>0 (init) x: {position[0].x} y: {position[0].y} (cur) x: y: </p>
            <p>num of fingers: {numOfFingers}</p>
            <p>number of taps: {tapCount}</p>
            <p>touch {''+isTouching} drag {''+isDragging}</p>
            zoom scale: 
            drag length: 
        </div>
    );
}
