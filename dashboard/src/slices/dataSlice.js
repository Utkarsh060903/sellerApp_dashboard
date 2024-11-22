import { createSlice } from '@reduxjs/toolkit';


const initialState = (localStorage.getItem('country') &&
    localStorage.getItem('country') !== undefined) ? JSON.parse(localStorage.getItem('country')) : '0';


const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action) => {
            const value = action.payload;

            localStorage.setItem('country', JSON.stringify(value));

            state = JSON.parse(localStorage.getItem('country'));
            return state;
        }
    }
})


export const { addData } = dataSlice.actions;

export default dataSlice.reducer;