import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { archivesSelector, removeFromArchive } from '../redux/slices/archiveSlice';
import Table from './TableComponent';
import { BiArchiveOut } from 'react-icons/bi';

import { INotesObj, addItem } from '../redux/slices/noteSlice';
import { TableDetailsComponent } from './TableDetailsComponent';

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
          <tr key={el.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <TableDetailsComponent {...el} />

            <td className="text-center px-6 py-4">
              <BiArchiveOut className="icon-style" onClick={() => onRemoveFromArchive(el)} />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default ArchiveTable;
