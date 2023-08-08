import React from 'react';
import { listCategoryIcons } from './ResultsTable';
import { INotesObj } from '../redux/slices/noteSlice';

export const TableDetailsComponent: React.FC<INotesObj> = ({
  category,
  title,
  created,
  categoryTitle,
  content,
  dates,
}) => {
  return (
    <>
      <td className="text-center px-6 py-4">{listCategoryIcons[category]}</td>
      <td className="text-center px-6 py-4">{title}</td>
      <td className="text-center px-6 py-4">{created}</td>
      <td className="text-center px-6 py-4">{categoryTitle}</td>
      <td className="text-center px-6 py-4">{content}</td>
      <td className="text-center px-6 py-4"> {dates}</td>
    </>
  );
};
