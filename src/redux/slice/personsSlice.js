import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'allUsers/fetchUsers',
    async (_, { rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
        try {
            if (!response.ok) {
                throw new Error('Что-то пошло не так!')
            }

            const dataPersons = await response.json()
            return dataPersons
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const fetchUsersById = createAsyncThunk(
    'allUsers/fetchUsersById',
    async (id, { rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        try {
            if (!response.ok) {
                throw new Error('Что-то пошло не так!')
            }

            const dataPersons = await response.json()
            return dataPersons
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const personsSlice = createSlice({
    name: 'allUsers',
    initialState: {
        allUsers: {
            data: [],
            status: null,
            error: null,
        },
        user: {
            data: [],
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
            state.user.status = 'succes'
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