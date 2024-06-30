import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: {
        message: null,
        type: 'info',
    },
    reducers:{
        notify: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
          },
          clearNotification: (state) => {
            state.message = null;
            state.type = 'info';
          },
    }
})

export const { notify, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;