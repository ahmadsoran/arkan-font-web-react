import { createSlice } from '@reduxjs/toolkit'


const SearchByNameSlice = createSlice({
    name: 'SearchByNameSlice',
    initialState: {
        name: ''
    },
    reducers: {
        setNameFontToSearch: (state, action) => {
            state.name = action.payload
        }
    },
})

export const { setNameFontToSearch } = SearchByNameSlice.actions
export default SearchByNameSlice.reducer