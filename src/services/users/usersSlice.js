import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, fetchUsersById } from "./fetchUsersThunk";

const personsSlice = createSlice({
    name: 'allUsers',
    initialState: {
        allUsers: {
            data: [],
            status: null,
            error: null,
        },
        user: {
            data: null,
            status: null,
            error: null,
        },
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.allUsers.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.allUsers.status = 'success'
            state.allUsers.data = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
            state.allUsers.status = 'rejected'
            state.allUsers.error = action.payload
        },
        [fetchUsersById.pending]: (state, action) => {
            state.user.status = 'loading'
        },
        [fetchUsersById.fulfilled]: (state, action) => {
            state.user.status = 'success'
            state.user.data = action.payload
        },
        [fetchUsersById.rejected]: (state, action) => {
            state.user.status = 'rejected'
            state.user.error = action.payload
        },
    }
})

export const { addPersons } = personsSlice.actions

export default personsSlice.reducer