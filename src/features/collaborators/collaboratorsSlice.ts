/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICollaborator } from '../../models/collaborator';

interface CollaboratorState {
  collaborators: ICollaborator[];
  filteredCollaborators: ICollaborator[];
}

const initialState: CollaboratorState = {
  collaborators: [],
  filteredCollaborators: [],
};

const collabSlice = createSlice({
  name: 'collaborators',
  initialState,
  reducers: {
    setCollaborators: (state, action: PayloadAction<ICollaborator[]>) => {
      const collabs = action.payload;
      state.collaborators = collabs;
    },
    searchCollaborators: (state, action: PayloadAction<string>) => {
      const query = action.payload;

      const filter = state.collaborators.filter((collaborator) =>
        collaborator.login
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      );
      return {
        ...state,
        filteredCollaborators:
          action.payload.length > 0 ? filter : [...state.collaborators],
      };
    },
    clearCollaborators: () => initialState,
  },
});

export const { setCollaborators, clearCollaborators, searchCollaborators } =
  collabSlice.actions;

export default collabSlice.reducer;
