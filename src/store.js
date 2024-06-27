import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/Authslice';
import notificationReducer from './slices/notificationSlice';
export const store=configureStore({
    reducer:{
        authUser:authReducer,
        notification: notificationReducer,
    },
});
