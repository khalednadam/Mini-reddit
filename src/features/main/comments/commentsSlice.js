import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async ({subreddit, id, title}) =>{
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}/${title}.json`);
        const json = await response.json();

        return json;
    }
)   
export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        isLoadingComments: false,
        failedToLoadComments: false,
        comments: []
    },
    extraReducers:{
        [loadComments.pending]: (state) =>{
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
        },
        [loadComments.fulfilled]: (state, action) =>{
            state.isLoadingComments = false;
            state.failedToLoadComments = false;
            const commentObjs = action.payload[1].data.children.map((item) => item.data);
            console.log(commentObjs);
            state.comments = commentObjs.map(comment =>{
                return{
                    author: comment.author,
                    body: comment.body,
                    id: comment.id
                }
            })
        },
        [loadComments.rejected]: (state) =>{
            state.isLoadingComments = false;
            state.failedToLoadComments = true;
        }
    }
});

export default commentsSlice.reducer;
export const selectComments = (state) => state.comments.comments;
export const selectIsLoadingComments = (state) => state.comments.isLoadingComments;
export const selectFailedToLoadComments = (state) => state.comments.failedToLoadComments;