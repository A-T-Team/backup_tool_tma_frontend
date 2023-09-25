import React, {useEffect, useState} from 'react';
import {Device} from "../utils/types";
import {DeviceItemContainer, DeviceField, VendorIcon, DeviceStatus} from "../styled-components/DeviceItemStyles";
import {ip, port, vendorIconSet} from "../utils/constants";
import {useNavigate} from "react-router-dom";


interface Props {
    device: Device
}

const DeviceItem = ({device}: Props) => {
    const [connectionStatus, setConnectionStatus] = useState("");
    const {name, ip: ipAddress, vendor, port: sshPort, user, password} = device;
    const vendorIcon = vendorIconSet.get(device.vendor.toLowerCase());
    const navigate = useNavigate();

    useEffect(() => {
            // Perform test connection functionality here
            fetch(`http://${ip}:${port}/api/devices/availability`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": name,
                        "vendor": vendor,
                        "ip": ipAddress,
                        "port": sshPort,
                        "user": user,
                        "password": password
                    })
                }
            )
                .then(data => data.json())
                .then((response) => {
                    if (response.ok) {
                        console.log(`${ipAddress} : ${response.message}`);
                        setConnectionStatus('connected');
                    } else {
                        console.log(`${ipAddress} : ${response.message}`);
                        setConnectionStatus('disconnected');
                    }
                })
                .catch((error) => {
                    console.error('Error checking connection:', error);
                    console.log(`${ipAddress} : ${error}`);
                    // setConnectionStatus('disconnected');
                });

        }, []);

    const lastBackup = "unknown";
    return (
        <DeviceItemContainer
            onClick={() => navigate(`/devices/${device.id}`)}
        >
            <DeviceField>{name}</DeviceField>
            <DeviceField>{ipAddress}</DeviceField>
            <DeviceField>
                <VendorIcon src={vendorIcon} alt={'vendor icon'}/>
                {vendor}
            </DeviceField>
            <DeviceStatus>{connectionStatus}</DeviceStatus>
            <DeviceField>{lastBackup}</DeviceField>

        </DeviceItemContainer>
    );
};

export default DeviceItem;
