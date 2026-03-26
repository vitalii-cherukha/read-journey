import { PuffLoader } from 'react-spinners';
import css from './MyLibraryBooks.module.css';
import { useEffect, useState } from 'react';
import type { Book } from '../../../types/book';
import { booksAPI } from '../../../api/api';

const MyLibraryBooks = () => {
  const [statusParams, setStatusParams] = useState(status:'');
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await booksAPI.getOwnBooks(statusParams);
        setBooks(response.results);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [statusParams]);

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>My library</h2>
      </div>

      {loading ? (
        <PuffLoader color="#262626" size={100} />
      ) : books.length > 0 ? (
        <ul className={css.list}>
          {books.map((book) => (
            <li className={css.bookItem} key={book._id}>
              <img
                className={css.bookImg}
                src={book.imageUrl}
                alt={book.title}
                width="137"
                height="208"
              />
              <h3 className={css.bookTitle}>{book.title}</h3>
              <p className={css.bookAuthor}>{book.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noBooks}>No books found</p>
      )}
    </div>
  );
};

export default MyLibraryBooks;
