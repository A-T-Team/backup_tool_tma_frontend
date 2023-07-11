import React from "react";
import {defaultDevice} from "./constants";
import {Device} from "./types";
export const deviceContext = React.createContext({
    device: defaultDevice,
    setDevice: (device: Device) => {
    }
})