import React from 'react';
import {Route, Router, Routes} from "react-router-dom";
import Devices from "./Devices";
import DeviceCard from "./DeviceCard";
import Pools from "./Pools";


const Main = () => {
    return (
        <Routes>
            <Route path="" element={<Pools/>}/>
            <Route path="devices" element={<Devices/>}/>
            <Route path="devices/:deviceId" element={<DeviceCard/>}/>
        </Routes>
    )
};

export default Main;
