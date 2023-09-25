import React, {useEffect, useState} from 'react';
import DeviceItem from "./DeviceItem";
import {headerLabels, ip, port} from "../utils/constants";
import AddDeviceModal from "./AddDeviceModal";
import Header from "./Header";
import {DeviceListContainer, ListHeaderContainer, ListHeaderItem} from "../styled-components/MainStyles";
import {Device} from "../utils/types";
import SearchBar from "./SearchBar";
import DeviceWindow from "./DeviceWindow";


const Main = () => {
    // const {device} = useContext(deviceContext);
    //for local tests
    // const deviceItems = Array(10).fill(device)
    const [showModal, setShowModal] = useState(false);
    const [devices, setDevices] = useState<Device[]>([]);
    const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
    //TODO
    // const [sortCriteria, setSortCriteria] = useState<string | null>(null);

    const handleAddDevice = (newDevice: Device) => {
        // Update the devices state with the new device
        setDevices(prevDevices => [...prevDevices, newDevice]);

    };
    // devices.sort((a: Device, b: Device) => a.name.localeCompare(b.name));

    useEffect(() => {
        fetch(`http://${ip}:${port}/api/devices`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                setDevices(data);
                setFilteredDevices(data);
            })
            .catch(error => console.log(error));

    }, []);

    const onHide = () => {
        setShowModal(!showModal);
    };

    const handleSort = (criteria: string) => {
        //TODO
    };

// dgd
    return (
        <>
            {devices &&
                <div>
                    <Header onHide={onHide}/>
                    <AddDeviceModal show={showModal} onHide={onHide} onAddDevice={handleAddDevice}/>
                    <SearchBar devices={devices} setFilteredDevices={setFilteredDevices}/>
                    <DeviceListContainer>
                        <ListHeaderContainer>
                            {headerLabels.map((label, i) => (
                                <ListHeaderItem key={i} onClick={() => {
                                    handleSort(label.toLowerCase());
                                    console.log(label);
                                    console.log("SORT IS NOT WORKING YET. IT WAS A LONG DAY SO GIVE YOURSELF SOME REST FOR GOD SAKE");
                                }
                                }>
                                    {label}
                                </ListHeaderItem>
                            ))}
                        </ListHeaderContainer>
                        {filteredDevices.map((d, i) =>
                            <DeviceItem key={i} device={d}/>
                        )}
                    </DeviceListContainer>
                </div>
            }
            <DeviceWindow/>
        </>
    );

};

export default Main;