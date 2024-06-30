import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice';
import endorsementsReducer from '../redux/endorsement/endorsementSlice';
import skillsReducer from '../redux/skills/skillsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    endorsements: endorsementsReducer,
    skills: skillsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;