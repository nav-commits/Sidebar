import '../Sidebar/Sidebar.css';
import React from 'react';
import Accordion from '../../Molecules/Accordian/Accordian';

function SideBar({ data, handleToggle, clicked, show, showDesktopAndTablet }) {
    let sideBarSlide = ['Sidebar'];

    if (show) {
        sideBarSlide = ['Sidebar open'];
    }
    if (showDesktopAndTablet) {
        sideBarSlide = 'SidebarDesktop';
    }

    return (
        <div className={sideBarSlide}>
            <Accordion data={data} handleToggle={handleToggle} clicked={clicked} />
        </div>
    );
}

export default SideBar;
