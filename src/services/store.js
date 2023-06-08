import { configureStore } from '@reduxjs/toolkit'
import personsReducer from './users/usersSlice';
import photosReducer from './photos/photosSlice';

export const store = configureStore({
    reducer: {
        allUsers: personsReducer,
        allPhotos: photosReducer,
    },
});