import { useForm } from 'react-hook-form';
import css from './AddBook.module.css';
import type { AddBookData } from '../../../types/filter';
import { BarLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import { booksAPI } from '../../../api/api';

const AddBook = () => {
  const [loading, setLoading] = useState(false);
  const [bookParams, setBookParams] = useState<AddBookData>({
    title: '',
    author: '',
    totalPages: 0,
  });

  useEffect(() => {
    const addBook = async () => {
      try {
        setLoading(true);
        const response = await booksAPI.addBook(
          bookParams.author,
          bookParams.title,
          bookParams.totalPages,
        );
        console.log('Book added successfully:', response);
      } catch (error) {
        console.error('Failed to add book:', error);
      } finally {
        setLoading(false);
      }
    };
    addBook();
  }, [bookParams]);

  const { register, handleSubmit } = useForm<AddBookData>();

  return (
    <form className={css.form} onSubmit={handleSubmit(setBookParams)}>
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
          {...register('totalPages', { valueAsNumber: true, min: 1 })}
          type="number"
          placeholder="0"
          min="1"
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
