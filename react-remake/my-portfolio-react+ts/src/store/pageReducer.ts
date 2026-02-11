import { createSlice } from '@reduxjs/toolkit'

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        currentPage: 'home',
        currentProperPage: 'Home'
    },
    reducers: {
        goToPage(state: { currentPage: string, currentProperPage: string }, action: { payload: [string, string] }) {
            state.currentPage = action.payload[0]
            state.currentProperPage = action.payload[1]
        }
    },
})

export const { goToPage } = pageSlice.actions
export default pageSlice.reducer
