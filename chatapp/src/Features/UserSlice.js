import { createSlice } from "@reduxjs/toolkit";

// fetch users..
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const querySnapshot = await getDocs(collection(store, "users"));
  const users = querySnapshot.docs.map((doc) => doc.data());
  return users;
});

const initialState = {
    users: [],
    isLoading: true,
    error: null,
};

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:() => {

    }
})