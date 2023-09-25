import React from 'react';
import {DevicesHeader, PoolParagraph, AddDeviceButton} from "../../styled-components/PoolStyles/PoolHeaderStyles";
import AddIcon from '@mui/icons-material/Add';

// interface Props {
//     onHide: () => void;
// }

const Header = () => {

    return (
        <DevicesHeader>
            <PoolParagraph>
                Select A Pool
            </PoolParagraph>
            <AddDeviceButton variant="contained" startIcon={<AddIcon fontSize="large"/>}>Create Pool</AddDeviceButton>


        </DevicesHeader>
    )


};

export default Header;
