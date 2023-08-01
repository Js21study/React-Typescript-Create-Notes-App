import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { archivesSelector, removeFromArchive } from '../redux/slices/archiveSlice';
import Table from './TableComponent';
import { BiArchiveOut } from 'react-icons/bi';
import { listCategoryIcons } from './ResultsTable';
import { INotesObj, addItem } from '../redux/slices/noteSlice';

const ArchiveTable: React.FC = () => {
  const dispatch = useDispatch();
  const archive = useSelector(archivesSelector);
  const listThead: string[] = ['', 'Name', 'Created', 'Category', 'Content', 'Dates', ''];

  const onRemoveFromArchive = (obj: INotesObj) => {
    dispatch(removeFromArchive(obj.id));
    dispatch(addItem(obj));
  };
  return (
    <>
      <Table title="Archived" listThead={listThead}>
        {archive.map((el) => (
          <tr key={el.id}>
            <td className="text-center">{listCategoryIcons[el.category]}</td>
            <td className="text-center">{el.title}</td>
            <td className="text-center">{el.created}</td>
            <td className="text-center">{el.categoryTitle}</td>
            <td className="text-center">{el.content}</td>
            <td className="text-center"> {el.dates}</td>

            <td className="text-center">
              <BiArchiveOut className="icon-style" onClick={() => onRemoveFromArchive(el)} />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default ArchiveTable;
