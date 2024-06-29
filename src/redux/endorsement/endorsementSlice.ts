import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Endorsement {
  id: string;
  recipient: User;
  endorser: User;
  timestamp: string;
  message: string;
  skill?: string;
  likes: number;
  comments?: number;
}

interface User {
  name: string;
  username: string;
  profilePictureUrl: string;
  profileUrl: string;
}

//* State interface
interface EndorsementState {
  endorsements: Endorsement[];
  isLoading: boolean;
  error?: string;
}

const initialState: EndorsementState = {
  endorsements: [],
  isLoading: false,
  error: undefined,
};

//* Initial state
// const initialState: EndorsementState = {
//   endorsements: [
//     {
//       id: "123456",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Nicole Dakota",
//         username: "NicoleDa_24",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       timestamp: "2024-05-29T14:00:00Z",
//       message:
//         "John's leadership skills are outstanding. He guided our team through challenging projects with ease.",
//       likes: 6,
//       comments: 18,
//     },
//     {
//       id: "123457",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Alex Johnson",
//         username: "AlexJ_89",
//         profilePictureUrl: "https://example.com/profiles/alexjohnson.jpg",
//         profileUrl: "https://example.com/users/AlexJ_89",
//       },
//       timestamp: "2024-05-29T15:30:00Z",
//       message:
//         "John consistently delivers high-quality work on time. His dedication is unmatched.",
//       likes: 15,
//       comments: 3,
//     },
//     {
//       id: "123458",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Maria Hernandez",
//         username: "MariaHern_91",
//         profilePictureUrl: "https://example.com/profiles/mariahernandez.jpg",
//         profileUrl: "https://example.com/users/MariaHern_91",
//       },
//       timestamp: "2024-05-30T10:00:00Z",
//       message:
//         "John's problem-solving skills are exceptional. He always finds innovative solutions.",
//       likes: 20,
//       comments: 10,
//     },
//     {
//       id: "123459",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "John Smith",
//         username: "JohnS_78",
//         profilePictureUrl: "https://example.com/profiles/johnsmith.jpg",
//         profileUrl: "https://example.com/users/JohnS_78",
//       },
//       timestamp: "2024-05-30T12:45:00Z",
//       message:
//         "John is a fantastic team player, always willing to help and support his colleagues.",
//       likes: 8,
//       comments: 2,
//     },
//     {
//       id: "123460",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Emma Brown",
//         username: "EmmaB_56",
//         profilePictureUrl: "https://example.com/profiles/emmabrown.jpg",
//         profileUrl: "https://example.com/users/EmmaB_56",
//       },
//       timestamp: "2024-05-30T14:20:00Z",
//       message:
//         "John's expertise in project management is impressive. He keeps everything on track.",
//       likes: 12,
//       comments: 5,
//     },
//     {
//       id: "123461",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "David Lee",
//         username: "DavidL_33",
//         profilePictureUrl: "https://example.com/profiles/davidlee.jpg",
//         profileUrl: "https://example.com/users/DavidL_33",
//       },
//       timestamp: "2024-05-31T09:15:00Z",
//       message:
//         "John has a keen eye for detail and ensures nothing is overlooked in his work.",
//       likes: 10,
//       comments: 8,
//     },
//     {
//       id: "123462",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Sophia Miller",
//         username: "SophiaM_44",
//         profilePictureUrl: "https://example.com/profiles/sophiamiller.jpg",
//         profileUrl: "https://example.com/users/SophiaM_44",
//       },
//       timestamp: "2024-05-31T11:30:00Z",
//       message:
//         "John's communication skills are top-notch. He ensures everyone is on the same page.",
//       likes: 9,
//       comments: 4,
//     },
//     {
//       id: "123463",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Michael Clark",
//         username: "MichaelC_27",
//         profilePictureUrl: "https://example.com/profiles/michaelclark.jpg",
//         profileUrl: "https://example.com/users/MichaelC_27",
//       },
//       timestamp: "2024-05-31T13:00:00Z",
//       message:
//         "John is a creative thinker, always bringing fresh ideas to the table.",
//       likes: 14,
//       comments: 7,
//     },
//     {
//       id: "123464",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Isabella Walker",
//         username: "IsabellaW_22",
//         profilePictureUrl: "https://example.com/profiles/isabellawalker.jpg",
//         profileUrl: "https://example.com/users/IsabellaW_22",
//       },
//       timestamp: "2024-06-01T08:00:00Z",
//       message:
//         "John's strategic thinking has greatly benefited our team and company.",
//       likes: 18,
//       comments: 12,
//     },
//     {
//       id: "123465",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Ethan Martinez",
//         username: "EthanM_99",
//         profilePictureUrl: "https://example.com/profiles/ethanmartinez.jpg",
//         profileUrl: "https://example.com/users/EthanM_99",
//       },
//       timestamp: "2024-06-01T09:45:00Z",
//       message:
//         "John's dedication to his work is evident in everything he does.",
//       likes: 11,
//       comments: 6,
//     },
//     {
//       id: "123466",
//       recipient: {
//         name: "John Smith",
//         username: "JohnSm_20",
//         profilePictureUrl: "https://example.com/profiles/nicoledakota.jpg",
//         profileUrl: "https://example.com/users/NicoleDa_24",
//       },
//       endorser: {
//         name: "Olivia Davis",
//         username: "OliviaD_11",
//         profilePictureUrl: "https://example.com/profiles/oliviadavis.jpg",
//         profileUrl: "https://example.com/users/OliviaD_11",
//       },
//       timestamp: "2024-06-01T11:20:00Z",
//       message:
//         "John is a true professional, always delivering top-quality work.",
//       likes: 17,
//       comments: 9,
//     },
//   ],
//   isLoading: false,
//   error: undefined,
// };

//* Async thunk for fetching endorsements

export const fetchEndorsements = createAsyncThunk(
  "endorsements/fetchEndorsements",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/endorsements/${userId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch endorsements");
    }
  }
);

//* Async thunk for adding an endorsement

export const addEndorsement = createAsyncThunk(
  "endorsements/addEndorsement",
  async (
    { endorsementData, userId }: { endorsementData: Endorsement; userId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:3000/endorsements/${userId}`,
        endorsementData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to add endorsement");
    }
  }
);

export const updateEndorsement = createAsyncThunk(
  "endorsements/updateEndorsement",
  async (
    { endorsementId, updatedData }: { endorsementId: string; updatedData: Partial<Endorsement> },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:3000/endorsements/${endorsementId}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to update endorsement");
    }
  }
);

export const deleteEndorsement = createAsyncThunk(
  "endorsements/deleteEndorsement",
  async (endorsementId: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:3000/endorsements/${endorsementId}`
      );
      return endorsementId;
    } catch (error) {
      return rejectWithValue("Failed to delete endorsement");
    }
  }
);

//* The slice that handles endorsements
const endorsementsSlice = createSlice({
  name: "endorsements",
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
  },
});

export default endorsementsSlice.reducer;
