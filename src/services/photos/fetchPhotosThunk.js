import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/path";

export const fetchPhotos = createAsyncThunk(
    'allPhotos/fetchPhotos',
    async ({ limit = 10, offset = 0 }, { rejectWithValue }) => {
        const response = await fetch(`${BASE_URL}/photos?_limit=${limit}&_start=${offset}`)
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