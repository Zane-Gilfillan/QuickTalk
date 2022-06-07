import { configureStore } from "@reduxjs/toolkit";
import {createStore} from '@reduxjs/toolkit'
import appReducer from '../features/appSlice'

export const store = createStore(appReducer)

export default configureStore({
    reducer: {
        app: appReducer,
    },
});
