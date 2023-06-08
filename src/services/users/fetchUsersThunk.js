import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/path"

export const fetchUsers = createAsyncThunk(
    'allUsers/fetchUsers',
    async (_, { rejectWithValue }) => {
        const response = await fetch(`${BASE_URL}/users/`)
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
        const response = await fetch(`${BASE_URL}/users/${id}`)
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