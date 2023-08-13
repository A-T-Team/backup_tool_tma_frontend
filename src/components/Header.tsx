import React from 'react';
import {DevicesHeader, DevicesParagraph, AddDeviceButton} from "../styled-components/HeaderStyles";
import AddIcon from '@mui/icons-material/Add';

interface Props {
    onHide: () => void;
}

const Header: React.FC<Props> = ({onHide}) => {

    return (
        <DevicesHeader>
            <DevicesParagraph>
                Devices
            </DevicesParagraph>
            <AddDeviceButton onClick={onHide} variant="contained" startIcon={<AddIcon fontSize="large"/>}> Add
                Device </AddDeviceButton>


        </DevicesHeader>
    )


};

export default Header;
