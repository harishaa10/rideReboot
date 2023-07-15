import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasSchedule: false,
    schedule: null,
};

export const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {
        setSchedule: (state, action)=>{
            state.schedule = action.payload;
        },
        setHasSchedule: (state, action)=>{
            state.hasSchedule = action.payload;
        }
    },
});

export const {setSchedule, setHasSchedule} = scheduleSlice.actions;

export default scheduleSlice.reducer;