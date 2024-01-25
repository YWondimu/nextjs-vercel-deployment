'use client'
import Header from './Header.js';
import Footer from './Footer.js';
import Map from './Map.js';
import FloorButtons from './FloorButtons.js';
import Slider from './Slider.js';
import { useRef, useEffect, useState } from 'react';
import './styles.css';
import Head from 'next/head';

export default function App() {

  function normalizeHeading(heading) {
      console.log('DEBUG: normalizeHeading');
      const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
      const index = Math.round(heading / 45) % 8;
      return directions[index];
  }
  function handleOrientation(event) {
    console.log('DEBUG: handleOrientation');
    if (event.alpha !== null) {
      const compassHeading = event.alpha;
      let message = 'Compass Heading: ' + compassHeading + ' degrees';
      addPhoneText(message);
      addPhoneText(normalizeHeading(heading));
    }
  }
  useEffect(() => {
    console.log('DEBUG: useEffect');
    if('DeviceOrientationEvent' in window) {
      console.log('DEBUG: addEventListener');
      window.addEventListener('deviceorientation', handleOrientation, false);
    } else {
      console.log('Device Orientation API not supported in this browser');
    }
    return () => {
      //cleanup, eg removing the listener
      console.log('DEBUG: removeEventListener');
      window.removeEventListener('deviceorientation', handleOrientation, false);
    }
  }, []);

  const getGPS = () => {
    console.log("***** START"); //DEBUG
    console.log("DEBUG: in getGPS, #" + new Date().getSeconds()); //DEBUG`
    let message = "";
    let gpsError = "No Error";
    if ("geolocation" in navigator) {
      console.log("DEBUG: in getGPS IF"); //DEBUG`
      message = "geolocation available";
      navigator.geolocation.getCurrentPosition(function(position){
      console.log("***** START GEO FCN"); //DEBUG
        console.log("DEBUG: in getGPS getCurrentPosition"); //DEBUG`
        message = 'hi';
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        message = `latitude: ${latitude}, longitude: ${longitude}`;
        addPhoneText(message);
        console.log("***** END GEO FCN"); //DEBUG
      }, function(error) {
      console.log("***** START ERROR FCN"); //DEBUG
        console.log("DEBUG: in getGPS ERROR"); //DEBUG`
        gpsError = "GPS error: ";
        switch(error.code) {
          case error.PERMISSION_DENIED:
            gpsError += "permission denied";
            break;
          case error.POSITION_UNAVAILABLE:
            gpsError += "position unavailable";
            break;
          case error.TIMEOUT:
            gpsError += "timeout";
            break;
          default:
            gpsError += "unknown error";
            break;
        }
        addPhoneText(gpsError);
        console.log("DEBUG: in getGPS ERROR: error is " + gpsError); //DEBUG`
        console.log("***** END ERROR FCN"); //DEBUG
      });
    } else {
      console.log("DEBUG: in getGPS ELSE"); //DEBUG`
      message = "geolocation not available";
    }
        
    console.log("DEBUG: in getGPS: error is " + gpsError); //DEBUG`

    console.log("***** END"); //DEBUG
    return `GPS: ${message}`;
  }

  // let folder = '/unb-floors/';
  let folder = '/unb-floors-with-shadow/';
  let floorNames = [
    'b',
    'c',
    'd',
    'e',
    'f'
  ];
  let urls = {};
  let sourceFiles = Array(floorNames.length).fill('');
  for (let i = 0; i < sourceFiles.length; i++) {
    sourceFiles[i] = folder + 'floor-' + floorNames[i] + '.svg';
    urls[floorNames[i]] = sourceFiles[i];
  }

  const [currentUrl, setCurrentUrl] = useState(sourceFiles[0]);
  
  const changeFloor = (e) => {
    let floorName = e.target.innerHTML;
    let url = folder + 'floor-' + floorName + '.svg';
    setCurrentUrl(url);
    console.log('floor url: ' + url);
    addPhoneText(getGPS());
  }

  // const [initIsDragging, setInitIsDragging] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragConstraintsRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const floorButtonsProps = {
    floorNames: floorNames,
    sourceFiles: sourceFiles,
    changeFloor: changeFloor,
    isDragging: isDragging,
    setIsDragging: setIsDragging,
    dragConstraintsRef: dragConstraintsRef,
    selected: selected,
    setSelected: setSelected,
  }

  const [zoom, setZoom] = useState(0.85);
    const handleZoom = (e) => {
      let zoom = e.target.value;
      let msg = 'zoom: ' + zoom;
      console.log(msg);
      addPhoneText(msg);
      setZoom(zoom);
    }

    const addPhoneText = (text) => {
      // return;
      setPhoneText((phoneText) => phoneText + '\n' + text);
      // const div = document.getElementById('phone-text');
      // div.scrollTop = div.scrollHeight;
    }

    const [initialTouchDist, setInitialTouchDist] = useState(null);
    const [zoomAtTouchStart, setZoomAtTouchStart] = useState(1);

    const dist = (p1,p2) => {
      const deltaX = p1.x - p2.x;
      const deltaY = p1.y - p2.y;
      const dist = Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2));
      return dist;
    }
    const calcTouchDist = (e) => {
      if (e.touches.length != 2) {
        return null;
      }
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const p1 = {x: touch1.clientX, y: touch1.clientY};
      const p2 = {x: touch2.clientX, y: touch2.clientY};
      return dist(p1, p2);
    }
    function isNumber(value) {
      return typeof value === 'number' && !isNaN(value) && value !== null && value !== undefined;
    }

    const [position, setPosition] = useState({x: -30, y: 0});
    const onTouchStart = (e) => {
      const num = e.touches.length;
      // addPhoneText('touch start! num: ' + num);
      if (num == 1) {
        let touch = e.touches[0];
        let x = touch.clientX;
        let y = touch.clientY;
        addPhoneText('x: ' + x + ' y: ' + y);
        // setPosition({x: -100, y: 0});
        addPhoneText('pos: ' + position.x + ' ' + position.y);
        addPhoneText(getGPS());
      }
      if (num == 2) {
        const distance = calcTouchDist(e);
        setInitialTouchDist(distance);
        setZoomAtTouchStart(zoom);
        // addPhoneText('touch start dist: ' + distance);
        // addPhoneText('touch start zoom: ' + zoom);
      }
    }
    const onTouchMove = (e) => {
      const num = e.touches.length;
      // addPhoneText('touch move! num: ' + num);
      if (num == 2) {
        const currentTouchDist = calcTouchDist(e);
        // const scaleDampener = 0.5;
        // const scaleDampener = 0.6;
        // const scaleDampener = 0.7
        // const scaleDampener = 0.75
        // const scaleDampener = 0.78
        // const scaleDampener = 0.79
        const scaleDampener = 0.8;
        // const scaleDampener = 0.9;
        // const scaleDampener = 1;
        let scale = ((currentTouchDist-initialTouchDist)*scaleDampener+initialTouchDist)/initialTouchDist;
        
        setZoom(zoomAtTouchStart * scale);
        addPhoneText('touch move currentTouchDist: ' + currentTouchDist);
        addPhoneText('touch move scale: ' + scale);
        addPhoneText('touch move zoomAtTouchStart: ' + zoomAtTouchStart);
        addPhoneText('touch move new zoom (zoomAtTouchStart*scale): ' + zoomAtTouchStart*scale);
      }
    }
    const onTouchEnd = (e) => {
      const num = e.touches.length;
      addPhoneText('touch end! num: ' + num);
      addPhoneText('touch end dist: ' + calcTouchDist(e));
    }
    const touchFunctions = {
      start: onTouchStart,
      move: onTouchMove,
      end: onTouchEnd,
    }

    const [phoneText, setPhoneText] = useState('phone text goes here');
    const phoneTextRef = useRef(null);
    useEffect(() => {
      // phoneTextRef.current.scrollTop = phoneTextRef.current.scrollHeight;
      const div = document.getElementById('phone-text');
      div.scrollTop = div.scrollHeight;
    }, [phoneText]);


    return (
      <>
        <Header phoneText={phoneText}></Header>
        {/* <div id='phone-text'>{phoneText}</div> */}
        {/* needs to be rendered on client side if passed a call back function for onclick */}
        <div className='middle'>
            {/* <Image src={currentUrl} alt='' className='image' style={{width: '100%', height: '80%', }} width={1000} height={1000}  /> */}
            {/* <Image src={currentUrl} alt='' className='image' fill /> */}
            <Map dragConstraintsRef={dragConstraintsRef} position={position} touchFunctions={touchFunctions} currentUrl={currentUrl} zoom={zoom} setZoom={setZoom}></Map>
            {/* <Map currentUrl={currentUrl} zoom={zoom} setZoom={setZoom}></Map> */}
            {/* <div className='test-div'>
                <button className='test-button'>test</button>
            </div> */}
            {/* <FloorButtons floorNames={floorNames} sourceFiles={sourceFiles} changeFloor={changeFloor} isDraggin={isDragging} setIsDragging></FloorButtons> */}
            <FloorButtons {...floorButtonsProps}></FloorButtons>
            {/* <Slider handleZoom={handleZoom}></Slider> */}
        </div>
        <Footer></Footer>
      </>
    );
}