import React, {useContext} from 'react';
import styled from "styled-components";
import {deviceContext} from "../utils/deviceContext";
import DeviceItem from "./DeviceItem";

const DeviceListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;


const Main = () => {
    const {device} = useContext(deviceContext);


    return (
        <DeviceListContainer>
            <DeviceItem device={device}/>
        </DeviceListContainer>
    );
};

export default Main;