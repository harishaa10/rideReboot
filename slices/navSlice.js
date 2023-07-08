import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null,
    hasRidePass: true,
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
        setRidePass: (state, action)=>{
            state.hasRidePass = action.payload;
        }
    },
});

export const {setOrigin, setDestination, setTravelTimeInformation, setRidePass} = navSlice.actions;

export default navSlice.reducer;
