import { useEffect, useState } from 'react';
import { booksAPI } from '../../../api/api';
import type { FilterData } from '../../../types/filter';
import type { Book } from '../../../types/book';
import css from './RecommendedBooks.module.css';

interface RecommendedBooksProps {
  searchParams: FilterData;
}

const RecommendedBooks = ({ searchParams }: RecommendedBooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Завантаження книг при зміні фільтрів або сторінки
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await booksAPI.getRecommended(
          page,
          10,
          searchParams.title,
          searchParams.author
        );
        setBooks(response.results);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchParams, page]);

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>Recommended</h2>
        <div className={css.pagination}>
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
            &lt;
          </button>
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
            &gt;
          </button>
        </div>
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.list}>
          {books.map((book) => (
            <li key={book._id}>
              {/* TODO: Додати BookCard компонент */}
              {book.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendedBooks;
