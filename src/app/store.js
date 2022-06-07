import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore} from 'redux'
import appReducer from '../features/appSlice'

export const store = createStore(appReducer)

export default configureStore({
    reducer: {
        app: appReducer,
    },
});
