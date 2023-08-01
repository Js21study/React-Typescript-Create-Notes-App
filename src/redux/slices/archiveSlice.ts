import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { INotesObj } from './noteSlice';

interface IArchives {
  archive: INotesObj[];
}

const initialState: IArchives = {
  archive: [
    {
      id: 5,
      category: 0,
      title: 'to do archive task',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Task',
      content: 'something',
      dates: '',
    },
    {
      id: 6,
      category: 0,
      title: 'to do any task',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Task',
      content: 'something',
      dates: '',
    },
  ],
};

export const archiveSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {
    addToArchive(state, action) {
      state.archive.push({
        ...action.payload,
      });
    },
    removeFromArchive(state, action) {
      state.archive = state.archive.filter((obj) => obj.id !== action.payload);
    },
  },
});
export const archivesSelector = (state: RootState) => state.archive.archive;

export const { addToArchive, removeFromArchive } = archiveSlice.actions;

export default archiveSlice.reducer;
