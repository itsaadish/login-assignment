import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value : ''
}

const loginSilce = createSlice({
  name:"login",
  initialState,
  reducers:{
    success:(state,action) => {
        return {value:"login successful"}
    },
    failure:(state,action) =>{
        return  {value:"login failed"}
    },
    cancel:(state,action) =>{
        return {value:""}
    }
  }
})

export const {success,failure,cancel} = loginSilce.actions
export default loginSilce.reducer