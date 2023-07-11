import React, {useContext, useState} from 'react';
import {deviceContext} from "../utils/deviceContext";
import DeviceItem from "./DeviceItem";
import {headerLabels} from "../utils/constants";
import AddDeviceModal from "./AddDeviceModal";
import Header from "./Header";
import {DeviceListContainer, ListHeaderContainer, ListHeaderItem} from "../styled-components/MainStyles";

const Main = () => {
    const {device} = useContext(deviceContext);
    const deviceItems = Array(10).fill(device)
    const [showModal, setShowModal] = useState(false);

    const onHide = () => {
        setShowModal(!showModal);
    };

    return (
        <>
<Header onHide={onHide}/>
            <AddDeviceModal show={showModal} onHide={onHide}/>
        <DeviceListContainer>
            <ListHeaderContainer>
                {headerLabels.map((label, i) => (
                    <ListHeaderItem key={i}>{label}</ListHeaderItem>
                ))}
            </ListHeaderContainer>
            {deviceItems.map((d, i) =>
                <DeviceItem key={i} device={d}/>
            )}
        </DeviceListContainer>
        </>
    );
};

export default Main;