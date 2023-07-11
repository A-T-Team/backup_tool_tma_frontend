import React from 'react';
import {HeaderWrapper, H1,StyledButton} from "../styled-components/HeaderStyles";

interface Props {
    onHide: () => void;
}
const Header: React.FC<Props> = ({ onHide }) => {

    return (
        <HeaderWrapper>
            <H1>Devices</H1>
            <StyledButton onClick={onHide} variant="primary">Add Device</StyledButton>
        </HeaderWrapper>
    );
};

export default Header;
