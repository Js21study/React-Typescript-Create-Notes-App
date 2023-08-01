import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INotesObj, deleteItem, setEditNote, notesSelector } from '../redux/slices/noteSlice';

import { BiArchiveIn, BiEditAlt, BiTrash } from 'react-icons/bi';
import { listCategoryIcons } from './ResultsTable';
import TableComponent from './TableComponent';
import { addToArchive } from '../redux/slices/archiveSlice';

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
        <tr key={el.id}>
          <td className="text-center">{listCategoryIcons[el.category]}</td>
          <td className="text-center">{el.title}</td>
          <td className="text-center">{el.created}</td>
          <td className="text-center">{el.categoryTitle}</td>
          <td className="text-center">{el.content}</td>
          <td className="text-center">{el.dates}</td>
          <td className="text-center">
            <BiEditAlt className="icon-style" onClick={() => onEditBtn(el)} />
          </td>
          <td className="text-center">
            <BiArchiveIn className="icon-style" onClick={() => onAddToArchive(el)} />
          </td>
          <td className="text-center">
            <BiTrash className="icon-style" onClick={() => onDeleteNote(el.id)} />
          </td>
        </tr>
      ))}
    </TableComponent>
  );
};

export default NotesTable;
