import SideBar from '../Organsims/Sidebar/Sidebar';
import React from 'react';
import { sideBarData } from '../../Utils/SidebarData';
import { useState } from 'react';
function SideBarPage() {
    const [clicked, setClicked] = useState('0');
    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
    };
    return (
        <React.Fragment>
            <SideBar data={sideBarData} handleToggle={handleToggle} clicked={clicked} />
        </React.Fragment>
    );
}

export default SideBarPage;
