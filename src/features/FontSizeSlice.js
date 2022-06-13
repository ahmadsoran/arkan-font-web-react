import { createSlice } from '@reduxjs/toolkit'


const FontSizeSlice = createSlice({
    name: 'FontSizeSlice',
    initialState: {
        fontSize: 30,
    },
    reducers: {
        setFontSize: (state, action) => {
            state.fontSize = action.payload
        }
    },
})

export const { setFontSize } = FontSizeSlice.actions
export default FontSizeSlice.reducer