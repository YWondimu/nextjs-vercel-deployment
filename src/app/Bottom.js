'use client'
import { useState, useEffect, useRef } from 'react';

export default function Bottom() {
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

    //useEffect( () => {
    //    //after tapEnd, wait tapInterval
    //    setTimeout(() => {
    //        //if tapInterval was longer than max, than tap finished
    //        if (tapInterval > MAX_TAP_INTERVAL) {
    //            //alert('in timeout');
    //            //alert('in use effect');
    //            //q: which to use of these two?
    //            setTapState(state.finished); //q: is this useful? having a tapState variable? or should this useEffect 
    //            setTapFinished(true); //q: is this useful? having a tapState variable? or should this useEffect 
    //        }
    //    }, MAX_TAP_INTERVAL);
    //
    //}, [tapEnd]);

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
                //case 1:
                //    if (numOfFingers == 1) {
                //        setColor('red');
                //    } else {
                //        //setColor('blue');
                //    }
                //    break;
                //case 2:
                //    if (numOfFingers == 1) {
                //        setColor('green');
                //    } else {
                //        //setColor('purple');
                //    }
                //    break;
                //case 3:
                //    if (numOfFingers == 1) {
                //        setColor('blue');
                //    } else {
                //        setColor('cyan');
                //    }
                //    break;
                //default:
                //    break;
            }
            //alert(tapCount + ' ' + numOfFingers);
        //}
    //q: which to use of these two?
    //}, [tapState]);
    //}, [tapFinished]);
    //}, [tapCount]);
    }, [tapEnd]);

    const handleTouchStart = (e) => {

        setText(e.touches[0].clientX);
        setDragStartLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});
        //setDragStartLocation.x = e.touches[0]?.clientX;
        //setDragStartLocation.y = e.touches[0]?.clientY;
        //if (startRunning.current == true) {
        //    alert('in if');
        //    return;
        //}
        //alert('after start if');
        startRunning.current = true;
        let numOfFingers = e.touches.length;
        setNumOfFingers(numOfFingers);

        //tapRefFingerNum.current = e.touches.length;
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
        //setText(text);
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
        bottomDiv.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        setDragPrevLocation(prev);
        setDragCurrentLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});


        //setDragCurrentLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});

        //setDragCurrentLocation.x = e.touches[0]?.clientX;
        //setDragCurrentLocation.y = e.touches[0]?.clientY;
        //if (tapRefState.current != 'in-handleTouchStart') {
        //    alert('in move if');
        //    return;
        //}
        //alert('after move if');
        //if (moveRunning.current == true) {
        //    return;
        //}
        moveRunning.current = true;
        setIsDragging(true);
        moveRunning.current = false;
        //tapRefState.current = 'move-finished';
    }

    const handleTouchEnd = (e) => {
        //setText( prev => prev + "\n 2-"+e.touches[0]?.clientX);
        //setText("2-" + e.touches[0]?.clientX);

        //setDragEndLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});
        setDragCurrentLocation({x:e.touches[0]?.clientX, y: e.touches[0]?.clientY});

        //setDragEndLocation.x = e.touches[0]?.clientX;
        //setDragEndLocation.y = e.touches[0]?.clientY;


        //alert('in end - before if: ' + tapRefCount.current);
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
        //alert('in end - after if: ' + tapRefCount.current);


        //if (tapRefState.current == 'endHandle-started') {
        //    //alert('in start if');
        //    alert('end in if');
        //    return;
        //}
        //tapRefState.current = 'endHandle-started';
        //alert('end after if');

        //if (tapRefState.current != 'endhandle') {
        //    //alert('in end if');
        //    return;
        //}
        ////alert('after end if');
        //if (endRunning.current == true) {
        //    return;
        //}
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
                //alert('setTapFinished false');

                //setTapFinished(true);
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

                //alert('Start-End: ' + currentTime + ' ' + tapEnd + ' ' + (currentTime-tapEnd));
                //alert(text + tapStart + ' ' + currentTime + ' ' + (currentTime-tapStart));
            }
        }
        endRunning.current = false;
        //tapRefState.current = 'endhandle';
        //alert('end before exit');
        //tapRefState.current = 'endHandle-ended';
    }

    return (
        <div style={style} className='bottom' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
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
