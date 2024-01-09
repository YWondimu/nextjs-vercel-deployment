'use client'
import Image from 'next/image'
import Button2 from './FloorButtons.js'
import Header from './Header.js';
import Footer from './Footer.js';
import Map from './Map.js';
import FloorButtons from './FloorButtons.js';
import Slider from './Slider.js';
import { useState } from 'react';
import {motion} from 'framer-motion';
import './styles.css';

export default function App() {

  let folder = '/unb-floors/';
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
  }

  // const [initIsDragging, setInitIsDragging] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const floorButtonsProps = {
    floorNames: floorNames,
    sourceFiles: sourceFiles,
    changeFloor: changeFloor,
    isDragging: isDragging,
    setIsDragging: setIsDragging,
  }

  const [zoom, setZoom] = useState(1);
  const handleZoom = (e) => {
    let zoom = e.target.value;
    console.log('zoom: ' + zoom);
    setZoom(zoom);
  }

    return (
      <>
        <Header></Header>
        {/* needs to be rendered on client side if passed a call back function for onclick */}
        <div className='middle'>
            {/* <Image src={currentUrl} alt='' className='image' style={{width: '100%', height: '80%', }} width={1000} height={1000}  /> */}
            {/* <Image src={currentUrl} alt='' className='image' fill /> */}
            <Map currentUrl={currentUrl} zoom={zoom}></Map>
            {/* <div className='test-div'>
                <button className='test-button'>test</button>
            </div> */}
            {/* <FloorButtons floorNames={floorNames} sourceFiles={sourceFiles} changeFloor={changeFloor} isDraggin={isDragging} setIsDragging></FloorButtons> */}
            <FloorButtons {...floorButtonsProps}></FloorButtons>
            <Slider handleZoom={handleZoom}></Slider>
        </div>
        <Footer></Footer>
      </>
    );
}