import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import scheduleReducer from "./slices/scheduleSlice";


export default store= configureStore({
    reducer: {
        nav: navReducer,
        schedule: scheduleReducer},
});

