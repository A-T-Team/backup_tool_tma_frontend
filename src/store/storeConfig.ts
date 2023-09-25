import {configureStore} from "@reduxjs/toolkit";
import devicesListReducer from "../slices/devicesListSlice";
import deviceReducer from "../slices/deviceSlice";
import poolsListReducer from "../slices/poolsListSlice";

const store = configureStore({
    reducer: {
        poolsList: poolsListReducer,
        //pool: poolReducer,

        devicesList: devicesListReducer,
        device: deviceReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store};
