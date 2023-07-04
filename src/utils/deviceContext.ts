import React from "react";
import icon from '../assets/defaultIcon.png'
import {defaultDevice} from "./constants";
import {Device} from "./types";
export const deviceContext = React.createContext({
    device: defaultDevice,
    setDevice: (device: Device) => {

    }
})