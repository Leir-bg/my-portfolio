import { createSlice } from '@reduxjs/toolkit'

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        currentPage: 'home',
    },
    reducers: {
        goToPage(state: { currentPage: string }, action: { payload: string }) {
            state.currentPage = action.payload
        }
    },
})

export const { goToPage } = pageSlice.actions
export default pageSlice.reducer
