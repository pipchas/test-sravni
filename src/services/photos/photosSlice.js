import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./fetchPhotosThunk";

const photosSlice = createSlice({
    name: 'allPhotos',
    initialState: {
        data: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchPhotos.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPhotos.fulfilled]: (state, action) => {
            state.status = 'success'
            state.data = action.payload
        },
        [fetchPhotos.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

export const { addPersons } = photosSlice.actions

export default photosSlice.reducer