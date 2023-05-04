import React from 'react';
import '../BackDrop/BackDrop.css';

function BackDrop({ closeBackDropHandler }) {
    return <div onClick={closeBackDropHandler} className='backdrop'></div>;
}

export default BackDrop;
