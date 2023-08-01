import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
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
      <Form
        onClick={(e) => e.stopPropagation()}
        className={styles.form}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="To do ..."
              id="title"
              {...register('title')}
            />
            {errors.title && <Form.Text className="text-danger">{errors.title.message}</Form.Text>}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              className={styles.textarea}
              as="textarea"
              placeholder="I want to do my task 27/07/2023 and ..."
              id="description"
              {...register('description')}
            />
            {errors.description && (
              <Form.Text className="text-danger">{errors.description.message}</Form.Text>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Select aria-label="Default select example" {...register('category')}>
            <option value="0">Task</option>
            <option value="1">Random Thought</option>
            <option value="2">Idea</option>
            <option value="3">Quote</option>
          </Form.Select>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" id="date" {...register('date')} />
          </Form.Group>
        </Row>
        <Button type="submit">{edit ? 'Edit' : 'Confirm'}</Button>
      </Form>
    </div>
  );
};

export default FormComponent;
