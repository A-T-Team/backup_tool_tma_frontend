import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Device} from "../utils/types";
import {getDevicesFromApi} from "../apiActions/apiActions";

export const defaultDevice = {
    id: 1,
    name: "CISCO_ZBD_123466",
    vendor: "Cisco",
    ip: "192.168.123.132",
    port: 22,
    user: "Admin_Timur",
    password: " ",
    //connectionStatus: true,
    // lastBackup: string;
}

export const deviceState: Device = defaultDevice;

export const deviceSlice = createSlice({
    name: 'devices',
    initialState: deviceState,
    reducers: {
        enterDeviceData: (state, action: PayloadAction<any>) => {
            state = action.payload;
        },
        resetDeviceData: (state, action: PayloadAction<any>) => {
            state = defaultDevice;
        },
    },
});

export default deviceSlice.reducer;
export const {resetDeviceData} = deviceSlice.actions;
