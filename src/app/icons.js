//zoom
import { FaPlus, FaMinus } from 'react-icons/fa';

// trash
import { FaRegTrashAlt } from 'react-icons/fa';

//washroom
import { BiMaleFemale, BiFemale, BiMale } from 'react-icons/bi';
import { FaFemale, FaMale, } from 'react-icons/fa';
import { LiaFemaleSolid, LiaMaleSolid, } from 'react-icons/lia';

//food
import { GrCafeteria } from 'react-icons/gr';
import { IoCafe, IoFastFood, IoWater } from 'react-icons/io5';
import { LuGlassWater } from 'react-icons/lu';
import { MdWaterDrop, MdEmojiFood } from 'react-icons/md';
import { GiVendingMachine } from 'react-icons/gi';
import { PiBowlFoodFill, PiBowlFoodDuotone, } from 'react-icons/gi';

//exits
import { FaStairs, FaElevator } from 'react-icons/fa6';
import { MdOutlineStairs, MdStairs, MdElevator, MdOutlineElevator } from 'react-icons/md';
import { GrElevator } from 'react-icons/gr';
import { Gi3dStaris, GiStairs } from 'react-icons/gi';
import { RxExit } from 'react-icons/rx';
import { ImExit } from 'react-icons/im';
import { IoExit, IoMdExit } from 'react-icons/io';

//seating areas
import { MdChair, MdOutlineChair } from 'react-icons/md';
import { PiChairBold, PiChair } from 'react-icons/pi';
//accessibility
import { PiWheelchairmotion } from 'react-icons/pi';
//roooms
import { IoText } from 'react-icons/io5';
import { IoTextSharp } from 'react-icons/io5';
import { piDesk, piDeskBold, piDeskDuotone, piDeskFill, } from 'react-icons/pi';

//pins
import { IoMdPin } from 'react-icons/io';
import { MdLoationPin } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';

//help
import { BsFillQuestionCircleFill, BsQuestionCircleFill } from 'react-icons/bs';
import { FaQuestion, FaQuestionCircle } from 'react-icons/bs';

//arrows (eg for exits, or pins)
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

const icons = {
    room: <IoTextSharp style={{pointerEvents: 'none'}}/>,
    genderNeutralWashroom: <BiMaleFemale style={{pointerEvents: 'none'}}/>,
    femaleWashroom: <FaFemale style={{pointerEvents: 'none'}}/>,
    maleWashroom: <FaMale style={{pointerEvents: 'none'}}/>,
    foodStore: <IoCafe style={{pointerEvents: 'none'}}/>,
    vendingMachine: <GiVendingMachine style={{pointerEvents: 'none'}}/>,
    waterFountain: <IoWater style={{pointerEvents: 'none'}}/>,
    stair: <FaStairs style={{pointerEvents: 'none'}}/>,
    elevator: <GrElevator style={{pointerEvents: 'none'}}/>,
    entranceAndExit: <IoMdExit style={{pointerEvents: 'none'}}/>,
    seating: <MdChair style={{pointerEvents: 'none'}}/>,
}

export default icons
