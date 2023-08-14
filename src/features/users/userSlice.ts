import { initialUsersData } from "../../data/initialUsersData";
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersData,
  reducers: {}
})

export default usersSlice.reducer