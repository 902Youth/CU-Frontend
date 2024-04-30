import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface Endorsement {
  id: number;
  userId: number;
  endorsedBy: string;
  skill: string;
  comment?: string;
}

//* State interface
interface EndorsementState {
  endorsements: Endorsement[];
  isLoading: boolean;
  error?: string;
}

//* Initial state
const initialState: EndorsementState = {
  endorsements: [],
  isLoading: false,
  error: undefined,
};

//* Async thunk for fetching endorsements

export const fetchEndorsements = createAsyncThunk(
  'endorsements/fetchEndorsements',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`----------i dont have the endpoint---------'${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch endorsements');
    }
  }
);

//* Async thunk for adding an endorsement

export const addEndorsement = createAsyncThunk(
  'endorsements/addEndorsement',
  async (endorsementData: Endorsement, { rejectWithValue }) => {
    try {
      const response = await axios.post('----------i dont have the endpoint---------', endorsementData);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to add endorsement');
    }
  }
);

//* The slice that handles endorsements
const endorsementsSlice = createSlice({
  name: 'endorsements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEndorsements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEndorsements.fulfilled, (state, action) => {
        state.endorsements = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchEndorsements.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      })
      .addCase(addEndorsement.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEndorsement.fulfilled, (state, action) => {
        state.endorsements.push(action.payload); 
        state.isLoading = false;
      })
      .addCase(addEndorsement.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  }
});

export default endorsementsSlice.reducer;
