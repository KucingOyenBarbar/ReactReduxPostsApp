/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialPostsData } from "../../data/initialPostsData"
import { Posts } from "../../types"

const PostSlice = createSlice({
  name: 'posts',
  initialState: initialPostsData,
  reducers: {
    postAdd: (state, action: PayloadAction<Posts>) => {
      state.push(action.payload)
    },  
  
    reactionAdded: (state, action: PayloadAction<Posts>) => {
      const { id, reactions } = action.payload
      const existingPost = state.find(post => post.id === id)
      existingPost ? existingPost.reactions[reactions]++ : null
    }
  },
})


export const {  postAdd, reactionAdded } = PostSlice.actions

export default PostSlice.reducer