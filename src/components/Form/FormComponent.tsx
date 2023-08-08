import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, editNoteSelector, setEditNote } from '../../redux/slices/noteSlice';
import { listCategoryTitle } from '../ResultsTable';

type FormType = {
  closeForm: () => void;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormSubmitType = {
  title: string;
  description: string | undefined;
  category: number | undefined;
  date: string | undefined;
};

const FormComponent: React.FC<FormType> = ({ closeForm, edit, setEdit }) => {
  const editNote = useSelector(editNoteSelector);
  const dispatch = useDispatch();
  const matchedEditDate = editNote?.dates.match(/\d{4}-\d{1,2}-\d{1,2}/g);

  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Title is a required field')
      .min(2, 'Title is too short')
      .matches(/^.{0,40}$/, 'Title is too long'),
    description: yup.string().max(100, 'Description is too long'),
    category: yup.number(),
    date: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: editNote ? editNote?.title : '',
      description: editNote ? editNote?.content : '',
      category: editNote ? editNote?.category : 0,
      date: matchedEditDate ? matchedEditDate.join('') : '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data: FormSubmitType) => {
    const dateObj = new Date();
    const dateCreated = dateObj.toDateString();
    const matchedDate = data.description?.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
    const matchedDateData = matchedDate ? matchedDate : '';
    const dates =
      matchedDateData.length > 1 && matchedDateData !== ''
        ? matchedDateData?.join(', ')
        : matchedDateData;

    let obj = {
      id: Date.now(),
      category: data.category,
      title: data.title,
      created: dateCreated,
      categoryTitle: listCategoryTitle[data.category ? data.category : 0],
      content: data.description,
      dates: data.date || matchedDateData ? data.date + ' ' + dates : '',
    };

    if (edit) {
      dispatch(deleteItem(editNote?.id));
      dispatch(addItem(obj));
    } else {
      dispatch(addItem(obj));
    }

    setEdit(false);
    dispatch(setEditNote(null));
    closeForm();
  };

  return (
    <div className={styles.layout} onClick={closeForm}>
      <form
        onClick={(e) => e.stopPropagation()}
        className={styles.form}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div>
          <label className="block text-gray-500 font-bold text-center mb-1  pr-4" htmlFor="title">
            Title
          </label>
        </div>
        <div>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            required
            type="text"
            placeholder="To do ..."
            id="title"
            {...register('title')}
          />
        </div>

        {errors.title && <p className="text-danger">{errors.title.message}</p>}

        <div>
          <label
            className="block text-gray-500 font-bold text-center mb-2 pr-4"
            htmlFor="description"
          >
            Description
          </label>
        </div>
        <div>
          <textarea
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full resize-none py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="I want to do my task 27/07/2023 and ..."
            id="description"
            {...register('description')}
          />
        </div>

        {errors.description && <p className="text-danger">{errors.description.message}</p>}

        <div>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-2"
            {...register('category')}
          >
            <option value="0">Task</option>
            <option value="1">Random Thought</option>
            <option value="2">Idea</option>
            <option value="3">Quote</option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-500 font-bold text-center mb-2 md:mb-0 pr-4"
            htmlFor="description"
          >
            Date
          </label>
          <input type="date" id="date" className="my-2 text-blue-500" {...register('date')} />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
          >
            {edit ? 'Edit' : 'Confirm'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
