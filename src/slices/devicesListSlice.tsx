import {Device} from "../utils/types";
import {createSlice} from "@reduxjs/toolkit";
import {getDevicesFromApi} from "../apiActions/apiActions";

export const devicesListState: devicesListType = {
    pullId: 1,
    devicesList: [],
}

export type devicesListType = {
    pullId: number,
    devicesList: Array<Device>,
}

export const devicesListSlice = createSlice({
    name: 'devicesList',
    initialState: devicesListState,
    reducers: {
        // getDevices: (state, action) => {
        //     const {devices} = action.payload;
        //     const {pullId} = action.payload;
        //
        //     state.devices = [...state.devices, ...devices];
        //     state.pullId = pullId;
        // },
    },
    extraReducers: builder => {
        builder.addCase(getDevicesFromApi.fulfilled, (state, action) => {
            state.devicesList = [...state.devicesList, ...action.payload];
        })
    }
});

export default devicesListSlice.reducer;
export const {} = devicesListSlice.actions;
