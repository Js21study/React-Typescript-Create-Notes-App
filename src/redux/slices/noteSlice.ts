import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface INotesObj {
  id: number;
  category: number;
  title: string;
  created: string;
  categoryTitle: string;
  content: string;
  dates: string;
}

interface INotes {
  notes: INotesObj[];
  editNote: INotesObj | null;
}

const initialState: INotes = {
  notes: [
    {
      id: 1,
      category: 0,
      title: 'to do hometask',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Task',
      content: 'description for task',
      dates: '',
    },
    {
      id: 2,
      category: 1,
      title: 'Thinking about future',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Random thought',
      content: 'some important text 1/2/2026',
      dates: '1/2/2026',
    },
    {
      id: 3,
      category: 2,
      title: 'To cook a cake',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Idea',
      content: 'something',
      dates: '2023-07-19',
    },
    {
      id: 4,
      category: 3,
      title: 'Somebody says...',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Quote',
      content: 'just 1/2/2222, 18/5/2033',
      dates: '2023-08-15 1/2/2222, 18/5/2033',
    },
    {
      id: 11,
      category: 0,
      title: 'To do exam',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Task',
      content: 'just something',
      dates: '',
    },
    {
      id: 12,
      category: 2,
      title: 'To write a book',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Idea',
      content: 'about another universe',
      dates: '',
    },
    {
      id: 15,
      category: 3,
      title: 'People says...',
      created: 'Fri Jul 28 2023',
      categoryTitle: 'Quote',
      content: 'I dont care...',
      dates: '',
    },
  ],
  editNote: null,
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addItem(state, action) {
      state.notes.push({
        ...action.payload,
      });
    },
    deleteItem(state, action) {
      state.notes = state.notes.filter((obj) => obj.id !== action.payload);
    },
    setEditNote(state, action) {
      state.editNote = action.payload;
    },
  },
});
export const notesSelector = (state: RootState) => state.note.notes;
export const editNoteSelector = (state: RootState) => state.note.editNote;

export const { addItem, deleteItem, setEditNote } = noteSlice.actions;

export default noteSlice.reducer;
