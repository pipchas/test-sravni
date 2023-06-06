import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPersons = createAsyncThunk(
    'allPersons/fetchPersons',
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

export const fetchPersonsById = createAsyncThunk(
    'allPersons/fetchPersonsById',
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
    name: 'allPersons',
    initialState: {
        allPersons: [],
        userById: null,
        status: null,
        error: null,
        userStatus: null,
        userError: null,
    },
    extraReducers: {
        [fetchPersons.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPersons.fulfilled]: (state, action) => {
            state.status = 'success'
            state.allPersons = action.payload
        },
        [fetchPersons.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [fetchPersonsById.pending]: (state, action) => {
            state.userStatus = 'loading'
        },
        [fetchPersonsById.fulfilled]: (state, action) => {
            state.userStatus = 'succes'
            state.userById = action.payload
        },
        [fetchPersonsById.rejected]: (state, action) => {
            state.userStatus = 'rejected'
            state.userError = action.payload
        },
    }
})

export const { addPersons } = personsSlice.actions

export default personsSlice.reducer