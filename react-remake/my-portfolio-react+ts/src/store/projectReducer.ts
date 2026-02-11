import { createSlice } from '@reduxjs/toolkit'

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        currProject: '',
        isOpen: false
    },
    reducers: {
        switchProject(state: { currProject: string }, action: { payload: string }) {
            state.currProject = action.payload
        },
        openProjects(state: { isOpen: boolean }) {
            state.isOpen = true
        },
        closeProjects(state: { isOpen: boolean }) {
            state.isOpen = false
        }
    },
})

export const { switchProject, openProjects, closeProjects } = projectSlice.actions
export default projectSlice.reducer