/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICollaborator } from '../../models/collaborator';

interface CollaboratorState {
  collaborators: ICollaborator[];
}

const initialState: CollaboratorState = {
  collaborators: [],
};

const collabSlice = createSlice({
  name: 'collaborators',
  initialState,
  reducers: {
    setCollaborators: (state, action: PayloadAction<ICollaborator[]>) => {
      const collabs = action.payload;
      state.collaborators = collabs;
    },
  },
});

export const { setCollaborators } = collabSlice.actions;

export default collabSlice.reducer;
