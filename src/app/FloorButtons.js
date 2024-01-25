'use client'
import {motion} from 'framer-motion';
import {useMemo} from 'react';

export default function FloorButtons({floorNames, sourceFiles, changeFloor, isDragging, setIsDragging, dragConstraintsRef, selected, setSelected}) {

    let num = sourceFiles?.length;
    // let buttons = Array(num).fill(null);
    // const [isDragging, setIsDragging] = useState(initIsDragging);

    //TODO: does this forloop run every time this component is re-rendered?
    // const buttons = useMemo(() => {
        let buttons =[];
        for (let i = 0; i < num; i++) {
            buttons[i] = 
            <button
                // onMouseDown={() => setIsDragging(false)}
                // onMouseMove={() => setIsDragging(true)}
                className={`button ${selected == i ? 'selected' : 'not-selected'}`}
                onMouseUp={(e) => {
                    if (!isDragging) {
                        changeFloor(e);
                        setSelected(i);
                    }
                    setIsDragging(false);
                    console.log('isDragging: ' + isDragging)
                }}
                // onDrag={(e, i) => console.log('info.offset: ' + i.offset.x + ' ' + i.offset.y)}
            >
                {floorNames[i]}
            </button>
        }
        // return buttons;
    // }, [selected]);
    // for (let i = 0; i < num; i++) {
    //     let level = sourceFiles[i];
    //     buttons[i] = 
    //     <button
    //         // onMouseDown={() => setIsDragging(false)}
    //         // onMouseMove={() => setIsDragging(true)}
    //         className='button'
    //         onMouseUp={(e) => {
    //             if (!isDragging) {
    //                 changeFloor(e);
                    
    //             }
    //             setIsDragging(false);
    //             console.log('isDragging: ' + isDragging)
    //         }}
    //         // onDrag={(e, i) => console.log('info.offset: ' + i.offset.x + ' ' + i.offset.y)}
    //     >
    //         {floorNames[i]}
    //     </button>
    // }

    return (
        <>
            {/* <motion.div 
                drag 
                dragMomentum={false}
                dragPropagation
                onDrag={(e, i) => {
                let min = 2;
                let absX = Math.abs(i.offset.x);
                let absY = Math.abs(i.offset.y);
                if (Math.max(absX, absY) > min) {
                    // setInitIsDragging(true);
                    setIsDragging(true);
                    console.log('info.offset: ' + i.offset.x + ' ' + i.offset.y)
                }
                }}
            > */}
                <motion.div drag dragMomentum={true} className={'button-container'} dragConstraints={dragConstraintsRef}>
                {/* <div className='button-container'> */}
                    {/* <div className='button-list'> */}
                        {buttons}
                    {/* </div> */}
                {/* </div> */}
                </motion.div>
            {/* </motion.div> */}
        </>
    );
}