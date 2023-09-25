import {createSlice} from "@reduxjs/toolkit";
import {getPoolsFromApi} from "../apiActions/apiActions";

export const poolsListState: poolsListType ={
    pools: [],
};

export type poolsListType ={
    pools: Array<PoolItem>
}

export type PoolItem ={
    id: number,
    name: string,
    description: string,
}

export const poolListSlice = createSlice({
    name: 'poolsList',
    initialState: poolsListState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPoolsFromApi.fulfilled, (state, action) => {
            state.pools = [...state.pools,  ...action.payload];
        })
    }
});


export default poolListSlice.reducer;
export const {} = poolListSlice.actions;
