import { createSlice } from '@reduxjs/toolkit';


const initialState = (localStorage.getItem('mode') &&
    localStorage.getItem('mode') !== undefined) ? JSON.parse(localStorage.getItem('mode')) : 'light';


const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggle: (state, action) => {
            const value = action.payload;

            localStorage.setItem('mode', JSON.stringify(value));

            state = JSON.parse(localStorage.getItem('mode'));
            return state;
        }
    }
})


export const { toggle } = modeSlice.actions;

export default modeSlice.reducer;