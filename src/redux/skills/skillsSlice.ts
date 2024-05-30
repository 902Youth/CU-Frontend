import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SkillsState {
  selectedSkill: string | null;
}

// default to null so all endorsements are shown
const initialState: SkillsState = {
  selectedSkill: null,
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    selectSkill(state, action: PayloadAction<string | null>) {
      state.selectedSkill = action.payload;
    },
  },
});

export const { selectSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
