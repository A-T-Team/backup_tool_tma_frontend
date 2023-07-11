import React from 'react';
import {Device} from "../utils/types";
import {DeviceItemContainer,DeviceField,VendorIcon,DeviceStatus} from "../styled-components/DeviceItemStyles";


interface Props {
    device: Device
}

const DeviceItem = ({device}: Props) => {
    const { vendorIcon, deviceName, ipAddress, vendor, connectionStatus, lastBackup } = device;

    return (
        <DeviceItemContainer>
            <DeviceField>{deviceName}</DeviceField>
            <DeviceField>{ipAddress}</DeviceField>
            <DeviceField>
                <VendorIcon src={vendorIcon.icon} alt={'vendor icon'}/>
                {vendor}
            </DeviceField>
            {/*<DeviceStatus isConnected={connectionStatus === 'connected'}>*/}
            {/*    {connectionStatus === 'connected' ? 'Connected' : 'Failed to connect'}*/}
            {/*</DeviceStatus>*/}
            <DeviceStatus>{connectionStatus === 'connected' ? 'Connected' : 'Failed to connect'}</DeviceStatus>
            <DeviceField>{lastBackup}</DeviceField>

        </DeviceItemContainer>
    );
};

export default DeviceItem;