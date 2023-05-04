import SideBar from '../Organsims/Sidebar/Sidebar';
import React from 'react';
import { sideBarData } from '../../Utils/SidebarData';
import { useState } from 'react';
import Button from '../Atoms/Button/Button';
import MenuIcon from '@mui/icons-material/Menu';
import BackDrop from '../Organsims/BackDrop/BackDrop';
import { useMediaQuery } from 'react-responsive';

function SideBarPage() {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [clicked, setClicked] = useState('0');
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1020px)',
    });
    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
    };

    const sideBarToggleHandler = () => {
        setSideBarOpen(!sideBarOpen);
    };
    const closeBackDropHandler = () => {
        setSideBarOpen(false);
    };

    let backDrop;
    if (sideBarOpen) {
        backDrop = <BackDrop closeBackDropHandler={closeBackDropHandler} />;
    }

    return (
        <React.Fragment>
            <Button icon={<MenuIcon />} onClick={sideBarToggleHandler} />
            <SideBar
                showDesktopAndTablet={isDesktopOrLaptop}
                data={sideBarData}
                show={sideBarOpen}
                handleToggle={handleToggle}
                clicked={clicked}
            />
            {backDrop}
        </React.Fragment>
    );
}

export default SideBarPage;
