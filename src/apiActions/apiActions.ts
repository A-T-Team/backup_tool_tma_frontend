import {createAsyncThunk} from "@reduxjs/toolkit";
import {ip, port} from "../utils/constants";

export const getDevicesFromApi = createAsyncThunk(
    'devices/getDevices',
    async () => {
        const response = await fetch(`http://${ip}:${port}/api/devices`);
        const data = await response.json();
        console.log(data);
        return data;
    }
);

export const getPoolsFromApi = createAsyncThunk(
    'pools/getPools',
    async () => {
        const res = await fetch(`http://${ip}:${port}/api/pools`);
        const data = await res.json();
        console.log(data);
        return data;
    }
)
