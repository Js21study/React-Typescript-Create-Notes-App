import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INotesObj, deleteItem, setEditNote, notesSelector } from '../redux/slices/noteSlice';
import TableComponent from './TableComponent';
import { addToArchive } from '../redux/slices/archiveSlice';
import { BiArchiveIn, BiEditAlt, BiTrash } from 'react-icons/bi';
import { TableDetailsComponent } from './TableDetailsComponent';

type NotesTableType = {
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};
const NotesTable: React.FC<NotesTableType> = ({ setOpenForm, setEdit }) => {
  const dispatch = useDispatch();
  const notes = useSelector(notesSelector);
  const listThead: string[] = ['', 'Name', 'Created', 'Category', 'Content', 'Dates', '', '', ''];

  const onDeleteNote = (id: number) => {
    dispatch(deleteItem(id));
  };

  const onAddToArchive = (obj: INotesObj) => {
    dispatch(addToArchive(obj));
    dispatch(deleteItem(obj.id));
  };

  const onEditBtn = (obj: INotesObj) => {
    setOpenForm(true);
    dispatch(setEditNote(obj));
    setEdit(true);
  };
  return (
    <TableComponent title="Active" listThead={listThead}>
      {notes.map((el) => (
        <tr key={el.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <TableDetailsComponent {...el} />
          <td className="text-center px-6 py-4">
            <BiEditAlt className="icon-style" onClick={() => onEditBtn(el)} />
          </td>
          <td className="text-center px-6 py-4">
            <BiArchiveIn className="icon-style" onClick={() => onAddToArchive(el)} />
          </td>
          <td className="text-center px-6 py-4">
            <BiTrash className="icon-style" onClick={() => onDeleteNote(el.id)} />
          </td>
        </tr>
      ))}
    </TableComponent>
  );
};

export default NotesTable;
