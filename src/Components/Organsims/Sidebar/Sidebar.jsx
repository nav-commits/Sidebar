import '../Sidebar/Sidebar.css';
import React from 'react';
import Accordion from '../../Molecules/Accordian/Accordian';

function SideBar({ data, handleToggle, clicked }) {

    return (
        <div className='Sidebar'>
            <Accordion data={data} handleToggle={handleToggle} clicked={clicked} />
        </div>
    );
}

export default SideBar;
