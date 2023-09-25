import React from 'react';
import {Route,  Routes} from "react-router-dom";
import Devices from "./Devices";
import DeviceCard from "./DeviceCard";
import Pools from "./Pools";
import Error from "./Error";


const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Pools/>}/>
            <Route path="devices" element={<Devices/>}/>
            <Route path="devices/:deviceId" element={<DeviceCard/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
};

export default Main;
