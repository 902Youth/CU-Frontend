import { createSlice, createAsyncThunk, AsyncThunk, AsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { bgUri, pfpUri } from "../../components/Home/mockData";

interface UserState {
  isLoggedIn: boolean;
  isRegistering: boolean;
  email?: string;
  token?: string;
  error?: string;
  registrationError?: string;
  userAccountDetails: {
    fullName: string | undefined;
    userName: string | undefined;
    position: string | undefined;
    department: string | undefined;
    badge: string | undefined;
    endorsements: number | null;
    skills: string[] | undefined;
    bio: string | undefined;
    pfp: string | undefined;
    bgPic: string | undefined;
    id: number | undefined;
    mobile: number | undefined;
    email: string | undefined;
    registeredAt: string | undefined;
    lastLogin: string | undefined;
  }
}

const initialState: UserState = {
  isLoggedIn: false,
  isRegistering: false,
  email: undefined,
  token: undefined,
  error: undefined,
  registrationError: undefined,
  userAccountDetails: {
    fullName: "Christ Hemsworth",
    userName: "ChrisH_72",
    position: "HR specialist",
    department: "HR",
    badge: "test",
    endorsements: null,
    skills: ["test"],
    bio: "A budding HR specialist looking for a small to medium sized company!",
    pfp: pfpUri,
    bgPic: bgUri,
    id: 200,
    mobile: 5555555555,
    email: "chrishemsworth@gmail.com",
    registeredAt: new Date().toISOString(),
    lastLogin: new Date().toISOString()
  }
};

const registerUser = createAsyncThunk<any, { email: string; password: string }>(
  "user/registerUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "----------i dont have the endpoint---------",
        { email, password }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error || "Registration failed");
    }
  }
);

const loginUser = createAsyncThunk<any, { email: string; password: string }>(
  "user/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "----------i dont have the endpoint---------",
        { email, password }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error || "Login failed");
    }
  }
);

// Get users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/users`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch users");
    }
  }
);

// Delete user
export const deleteUser = createAsyncThunk<any, { id: number }>(
  "user/deleteUser",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:3000/users/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error || "Delete failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.email = undefined;
      state.token = undefined;
      state.error = undefined;
      state.registrationError = undefined;
      state.isRegistering = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = undefined;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isRegistering = false;
        state.isLoggedIn = true;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.registrationError = undefined;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isRegistering = false;
        state.registrationError = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.error = undefined;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.error = undefined;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
