import React, {useEffect, useState} from 'react';
import DeviceItem from "./DeviceItem";
import {headerLabels} from "../utils/constants";
import AddDeviceModal from "./AddDeviceModal";
import Header from "./Header";
import {DeviceListContainer, ListHeaderContainer, ListHeaderItem} from "../styled-components/MainStyles";
import {Device} from "../utils/types";
import SearchBar from "./SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {getDevicesFromApi} from "../apiActions/apiActions";
import {AppDispatch, RootState} from "../store/storeConfig";


const Devices = () => {
    const {devicesList} = useSelector((state: RootState) => state.devicesList);
    const [showModal, setShowModal] = useState(false);
    const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
    const dispatch = useDispatch<AppDispatch>();


    const handleAddDevice = (newDevice: Device) => {
        // Update the devices state with the new device
        //setDevices(prevDevices => [...prevDevices, newDevice]);
    };

    useEffect(() => {
        console.log("get from Api")
        dispatch(getDevicesFromApi());
    }, [dispatch]);

    useEffect(() => {
        console.log(" set in filterList")
        setFilteredDevices(devicesList);
    }, [devicesList]);

    const onHide = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            {devicesList &&
                <div>
                    <Header onHide={onHide}/>
                    <AddDeviceModal show={showModal} onHide={onHide} onAddDevice={handleAddDevice}/>
                    <SearchBar devices={devicesList} setFilteredDevices={setFilteredDevices}/>
                    <DeviceListContainer>
                        <ListHeaderContainer>
                            {headerLabels.map((label, i) => (
                                <ListHeaderItem key={i} onClick={() => {
                                    console.log(label);
                                    console.log("SORT IS NOT WORKING YET. IT WAS A LONG DAY SO GIVE YOURSELF SOME REST FOR GOD SAKE");
                                }
                                }>
                                    {label}
                                </ListHeaderItem>
                            ))}
                        </ListHeaderContainer>
                        {filteredDevices.map((d, i) =>
                            <DeviceItem
                                key={i}
                                device={d}
                            />
                        )}
                    </DeviceListContainer>
                </div>
            }
        </>
    );

};

export default Devices;
