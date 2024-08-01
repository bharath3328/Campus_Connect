//working fine 
//common axios is working 
//use that 
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from '../axios.jsx';
import { useNavigate } from "react-router-dom";
export const loginUser=createAsyncThunk('loginUser',async(data)=>{
    const response = await axios.post("/api/user/login",data);
    return response.data;
}) 

export const logoutUser=createAsyncThunk('logoutUser',async()=>{
    const navigate=useNavigate();
    await axios.get("/api/user/logout");
    navigate('/');
})


const authSlice=createSlice({
    name:'authUser',
    initialState: {
        user: null,
        status: 'idle',
      },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state,action)=>{
            state.request=true;
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.request=false;
            state.status='succeded';
            state.error=false;
            state.success=true;
            state.user = action.payload;
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.request=false;
            state.error=true;
            state.success=false;
        })
        builder.addCase(logoutUser.pending,(state,action)=>{
            state.request=true;
        })
        builder.addCase(logoutUser.fulfilled,(state,action)=>{
            state.request=false;
            state.error=false;
            state.success=false;
            state.user = null;
        })
        builder.addCase(logoutUser.rejected,(state,action)=>{
            state.request=false;
            state.error=true;
            state.success=false;
        })
    }
})

export default authSlice.reducer;