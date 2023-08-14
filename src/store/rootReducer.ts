import { combineReducers } from '@reduxjs/toolkit';
import postReducer from "../features/posts/postSlice"
import usersReducer from "../features/users/userSlice"

const rootReducer = combineReducers({
  posts: postReducer,
  users: usersReducer
})

export default rootReducer