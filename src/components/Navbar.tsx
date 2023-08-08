import React from 'react';
import appIcon from '../assets/db_icon.svg';
import {AppIcon,NavContainer, NavItem} from "../styled-components/NavbarStyles";

const Navbar = () => {

    return (
            <NavContainer>
                <AppIcon src={appIcon} alt={'vendor icon'}/>
                <NavItem>Switch Backup internal tool</NavItem>
            </NavContainer>
    );
};

export default Navbar;