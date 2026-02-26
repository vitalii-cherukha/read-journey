import { useForm } from 'react-hook-form';
import css from './AddBook.module.css';
import type { AddBookData } from '../../../types/filter';
import { BarLoader } from 'react-spinners';

interface AddBookProps {
  onSubmit: (data: { title: string; author: string; number: number }) => void;
  loading: boolean;
}

const AddBook = ({ onSubmit, loading }: AddBookProps) => {
  const { register, handleSubmit } = useForm<AddBookData>();

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={css.title}>Filters:</h3>

      <label className={css.label}>
        Book title:
        <input
          className={css.input}
          {...register('title')}
          type="text"
          placeholder="Enter text"
        />
      </label>

      <label className={css.label}>
        The author:
        <input
          className={css.input}
          {...register('author')}
          type="text"
          placeholder="Enter text"
        />
      </label>

      <label className={css.label}>
        Number of pages:
        <input
          className={css.input}
          {...register('number')}
          type="number"
          placeholder="0"
        />
      </label>

      <button type="submit" className={css.btn}>
        {!loading ? (
          'Add book'
        ) : (
          <BarLoader
            className={css.loader}
            color="#121417"
            speedMultiplier={3}
            width={65}
          />
        )}
      </button>
    </form>
  );
};

export default AddBook;
