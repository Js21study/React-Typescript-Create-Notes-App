import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

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
    <div className=" p-5 container">
      <div>
        <NotesTable setOpenForm={setOpenForm} setEdit={setEdit} />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setOpenForm(!openForm)} variant="primary" className="my-2">
            Create
          </Button>
        </div>
        {openForm && <FormComponent closeForm={closeForm} edit={edit} setEdit={setEdit} />}
        <ResultsTable />
      </div>
    </div>
  );
};

export default Main;
