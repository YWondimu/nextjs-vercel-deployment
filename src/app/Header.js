'use client'

export default function Header({phoneText}) {
    return (
        // <div styles={...styles} className='header'>
        <div className='top'>
            <div id='phone-text'>{phoneText}</div>
        </div>
    );
}