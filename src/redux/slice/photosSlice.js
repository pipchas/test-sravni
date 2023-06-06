import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(
    'allPhotos/fetchPhotos',
    async ({ limit, offset }, { rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_start=${offset}`)
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

const photosSlice = createSlice({
    name: 'allPhotos',
    initialState: {
        allPhotos: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchPhotos.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPhotos.fulfilled]: (state, action) => {
            state.status = 'success'
            state.allPhotos = action.payload
        },
        [fetchPhotos.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

export const { addPersons } = photosSlice.actions

export default photosSlice.reducer