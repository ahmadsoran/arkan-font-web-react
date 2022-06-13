import { createSlice } from '@reduxjs/toolkit'


const TextTestSlice = createSlice({
    name: 'TextTestSlice',
    initialState: {
        text: ''
    },
    reducers: {
        SetTextTest: (state, action) => {
            state.text = action.payload
        }
    },
})

export const { SetTextTest } = TextTestSlice.actions
export default TextTestSlice.reducer