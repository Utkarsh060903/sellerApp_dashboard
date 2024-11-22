import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer  from './slices/dataSlice.js'
import modeSliceReducer  from './slices/toggleSlice.js'

const store = configureStore({
    reducer: {
        data: dataSliceReducer,
        mode: modeSliceReducer
    },
    devTools: true
})

export default store;