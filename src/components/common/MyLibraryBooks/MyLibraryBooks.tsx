import { PuffLoader } from 'react-spinners';
import css from './MyLibraryBooks.module.css';
import { useState } from 'react';
import type { Book } from '../../../types/book';

const MyLibraryBooks = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
    const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getLimit = () => {
    if (window.innerWidth >= 1440) return 10; // Desktop
    if (window.innerWidth >= 768) return 8; // Tablet
    return 2; // Mobile
  };

  const [limit, setLimit] = useState(getLimit());

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>Recommended</h2>
        <div className={css.pagination}>
          <button
            className={css.paginationBtn}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <svg className={css.paginationIcon} width="16" height="16">
              <use href="/sprite.svg#icon-chevron-left" />
            </svg>
          </button>
          <button
            className={css.paginationBtn}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            <svg className={css.paginationIcon} width="16" height="16">
              <use href="/public/sprite.svg#icon-chevron-right" />
            </svg>
          </button>
        </div>
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
