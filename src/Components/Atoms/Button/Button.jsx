import React from 'react';
import '../Button/Button.css';

function Button({ onClick, icon }) {
    return (
        <button
            onClick={onClick}
            className='button'
        >
            {icon}
        </button>
    );
}

export default Button;
