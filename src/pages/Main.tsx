import React, { useState } from 'react';
import ResultsTable from '../components/ResultsTable';
import NotesTable from '../components/NotesTable';
import FormComponent from '../components/Form/FormComponent';
import { useDispatch } from 'react-redux';
import { setEditNote } from '../redux/slices/noteSlice';
import { Button } from '../components/UI/Button';

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
          <Button onClick={() => setOpenForm(!openForm)} type="button" variant="create">
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
