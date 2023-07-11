import React from 'react';
import {Device} from "../utils/types";
import {DeviceItemContainer, DeviceField, VendorIcon, DeviceStatus} from "../styled-components/DeviceItemStyles";
import {vendorIconSet} from "../utils/constants";


interface Props {
    device: Device
}

const DeviceItem = ({device}: Props) => {
    const {name, ip, vendor,} = device;
    const vendorIcon = vendorIconSet.get(device.vendor.toLowerCase());
    // vendorIconSet.forEach(s => console.log(s));
    // console.log(device.vendor);
    //connectionStatus TODO
    const connectionStatus = "connected";
    const lastBackup = "unknown";
    return (
        <DeviceItemContainer>
            <DeviceField>{name}</DeviceField>
            <DeviceField>{ip}</DeviceField>
            <DeviceField>
                <VendorIcon src={vendorIcon} alt={'vendor icon'}/>
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