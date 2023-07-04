import React from 'react';
import styled from "styled-components";
import {Device} from "../utils/types";

interface Props {
    device: Device
}

const DeviceItemContainer = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px;
      border-radius: 4px;
      background-color: #2A3A50;
      margin-bottom: 8px;
    `;

const DeviceField = styled.span`
      color: #D7E1EC;
      font-size: 12px;
    `;

const DeviceStatus = styled.span`
    color: #3ACD4F;
    `;

const VendorIcon = styled.img`
      width: 40px;
      height: 40px;
      margin-right: 12px;
    `;

const DeviceItem = ({device}: Props) => {
    const { vendorIcon, deviceName, ipAddress, vendor, connectionStatus, lastBackup } = device;

    return (
        <DeviceItemContainer>
            <DeviceField>{deviceName}</DeviceField>
            <DeviceField>{ipAddress}</DeviceField>
            <DeviceField><VendorIcon src={vendorIcon.icon} alt={'vendor icon'}/>{vendor}</DeviceField>
            {/*<DeviceStatus isConnected={connectionStatus === 'connected'}>*/}
            {/*    {connectionStatus === 'connected' ? 'Connected' : 'Failed to connect'}*/}
            {/*</DeviceStatus>*/}
            <DeviceStatus>{connectionStatus === 'connected' ? 'Connected' : 'Failed to connect'}</DeviceStatus>
            <DeviceField>{lastBackup}</DeviceField>

        </DeviceItemContainer>
    );
};

export default DeviceItem;