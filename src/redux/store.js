import { configureStore } from '@reduxjs/toolkit'
import { personsInfoApi } from './api'
import personsReducer from './slice/personsSlice';
import photosReducer from './slice/photosSlice';

export const store = configureStore({
    reducer: {
        [personsInfoApi.reducerPath]: personsInfoApi.reducer,
        allPersons: personsReducer,
        allPhotos: photosReducer,
    },
    middleware: (getDefMiddlware) => getDefMiddlware().concat([personsInfoApi.middleware])
});