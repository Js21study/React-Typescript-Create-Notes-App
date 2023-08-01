import React from 'react';
import { useSelector } from 'react-redux';

import { BiBookOpen, BiBrain, BiTask, BiBulb } from 'react-icons/bi';
import { notesSelector } from '../redux/slices/noteSlice';
import { archivesSelector } from '../redux/slices/archiveSlice';
import TableComponent from './TableComponent';

export const listCategoryIcons = [
  <BiTask className="icon-style" />,
  <BiBrain className="icon-style" />,
  <BiBulb className="icon-style" />,
  <BiBookOpen className="icon-style" />,
];

export const listCategoryTitle = ['Task', 'Random Thought', 'Idea', 'Quote'];

const ResultsTable: React.FC = () => {
  const listThead: string[] = ['', 'Note Category', 'Active', 'Archived'];

  const notes = useSelector(notesSelector);
  const archive = useSelector(archivesSelector);

  return (
    <>
      <TableComponent title="Summary" listThead={listThead}>
        {listCategoryIcons.map((el, i) =>
          notes.filter((note) => note.category === i).length === 0 &&
          archive.filter((arch) => arch.category === i).length === 0 ? (
            ''
          ) : (
            <tr key={i}>
              <td className="text-center">{el}</td>
              <td className="text-center">{listCategoryTitle[i]}</td>
              <td className="text-center">{notes.filter((note) => note.category === i).length}</td>
              <td className="text-center">
                {archive.filter((arch) => arch.category === i).length}
              </td>
            </tr>
          ),
        )}
      </TableComponent>
    </>
  );
};

export default ResultsTable;
