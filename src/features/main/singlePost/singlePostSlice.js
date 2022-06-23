import { createSlice } from "@reduxjs/toolkit"
export const singlePostSlice = createSlice({
    name: 'singlePost', 
    initialState: "",
    reducers:{
        changeActivePostId: (state, action) => {
            return state = action.payload;
        }
    }
});

export default singlePostSlice.reducer;
export const selectSinglePostId = (state) => state.singlePost;
export const {changeActivePostId} = singlePostSlice.actions;