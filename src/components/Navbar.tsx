import React, {useState} from 'react';
import appIcon from '../assets/db_icon.svg'
import userIcon from '../assets/user_icon.svg'

import {
    NavTop,
    AppName,
    HeaderLeft,
    HeaderRight,
    UsernameParagraph,
    AppIcon,
    UserIcon

} from "../styled-components/NavbarStyles";


function Navbar() {


    const [open, setOpen] = useState(false);

    console.log(open)

    return (
        <NavTop>
            <HeaderLeft>
                <AppIcon src={appIcon} alt={"Application Logo"}/>

                <AppName>Backup</AppName>
            </HeaderLeft>

            <HeaderRight>

                <UserIcon src={userIcon} alt={"Pool Logo"}/>
                <UsernameParagraph>PoolName/UserName</UsernameParagraph>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_342_2885)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.5402 14.7709C12.3994 14.9176 12.2084 15 12.0092 15C11.8101 15 11.6191 14.9176 11.4782 14.7709L7.2293 10.3451C7.15756 10.2729 7.10034 10.1866 7.06098 10.0912C7.02161 9.9957 7.00089 9.89304 7.00003 9.78916C6.99916 9.68528 7.01817 9.58226 7.05593 9.48611C7.0937 9.38996 7.14947 9.30261 7.21999 9.22915C7.29051 9.15569 7.37437 9.0976 7.46668 9.05826C7.55898 9.01892 7.65789 8.99913 7.75762 9.00003C7.85734 9.00093 7.9559 9.02251 8.04754 9.06352C8.13917 9.10452 8.22205 9.16412 8.29134 9.23885L12.0092 13.1115L15.7271 9.23885C15.8688 9.09633 16.0585 9.01747 16.2554 9.01926C16.4524 9.02104 16.6408 9.10332 16.78 9.24838C16.9193 9.39343 16.9983 9.58966 17 9.79479C17.0017 9.99993 16.926 10.1976 16.7892 10.3451L12.5402 14.7709Z"
                              fill="#D7E1EC"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_342_2885">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>


            </HeaderRight>
        </NavTop>
    );
}


export default Navbar;
