import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action)=>{
            state.origin = action.payload;
        },
        setDestination: (state, action)=>{
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action)=>{
            state.travelTimeInformation = action.payload;
        },
        clearNav: (state)=>{
            state.origin = null;
            state.destination = null;
            state.travelTimeInformation = null;
        }
    },
});

export const {setOrigin, setDestination, setTravelTimeInformation, clearNav} = navSlice.actions;

export default navSlice.reducer;
