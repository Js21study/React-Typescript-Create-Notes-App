import React, { useState } from 'react';
import ResultsTable from '../components/ResultsTable';
import NotesTable from '../components/NotesTable';
import FormComponent from '../components/Form/FormComponent';
import { useDispatch } from 'react-redux';
import { setEditNote } from '../redux/slices/noteSlice';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const closeForm = () => {
    setOpenForm(!openForm);
    dispatch(setEditNote(null));
  };

  return (
    <div className="p-5 container">
      <div>
        <NotesTable setOpenForm={setOpenForm} setEdit={setEdit} />
        <div className="flex justify-end">
          <button
            onClick={() => setOpenForm(!openForm)}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 my-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Create
          </button>
        </div>
        {openForm && <FormComponent closeForm={closeForm} edit={edit} setEdit={setEdit} />}
        <ResultsTable />
      </div>
    </div>
  );
};

export default Main;
