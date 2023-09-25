import {configureStore} from "@reduxjs/toolkit";
import devicesListReducer from "../slices/devicesListSlice";
import deviceReducer from "../slices/deviceSlice";

const store = configureStore({
    reducer: {
        //pools: poolsReducer,
        //pool: poolReducer,

        devicesList: devicesListReducer,
        device: deviceReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store};
