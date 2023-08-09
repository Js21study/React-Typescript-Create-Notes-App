import React from 'react';
import { useSelector } from 'react-redux';

import { INotesObj, notesSelector } from '../redux/slices/noteSlice';
import { archivesSelector } from '../redux/slices/archiveSlice';
import TableComponent from './TableComponent';
import { BiBookOpen, BiBrain, BiBulb, BiTask } from 'react-icons/bi';

export const listCategoryIcons = [
  <BiTask className="icon-style" />,
  <BiBrain className="icon-style" />,
  <BiBulb className="icon-style" />,
  <BiBookOpen className="icon-style" />,
];

export const listCategoryTitle = ['Task', 'Random Thought', 'Idea', 'Quote'];

const ResultsTable: React.FC = () => {
  const listThead: string[] = ['', 'Note Category', 'Active', 'Archived'];

  const notes: INotesObj[] = useSelector(notesSelector);
  const archive = useSelector(archivesSelector);

  return (
    <>
      <TableComponent title="Summary" listThead={listThead}>
        {listCategoryIcons.map((el, i) =>
          notes.filter((note) => note.category === i).length === 0 &&
          archive.filter((arch) => arch.category === i).length === 0 ? (
            ''
          ) : (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="text-center px-6 py-4">{el}</td>
              <td className="text-center px-6 py-4">{listCategoryTitle[i]}</td>
              <td className="text-center px-6 py-4">
                {notes.filter((note: INotesObj) => note.category === i).length}
              </td>
              <td className="text-center px-6 py-4">
                {archive.filter((arch: INotesObj) => arch.category === i).length}
              </td>
            </tr>
          ),
        )}
      </TableComponent>
    </>
  );
};

export default ResultsTable;
