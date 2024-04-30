import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice';
import endorsementsReducer from '../redux/endorsement/endorsementSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    endorsements: endorsementsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
