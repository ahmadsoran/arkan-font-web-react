import { createSlice } from '@reduxjs/toolkit'


const OpenFontsModal = createSlice({
    name: 'OpenFontsModal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        SetOpenFontModal: (state, action) => {
            state.isOpen = action.payload
        }
    },
})

export const { SetOpenFontModal } = OpenFontsModal.actions
export default OpenFontsModal.reducer