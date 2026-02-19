import { useEffect, useState } from 'react';
import { booksAPI } from '../../../api/api';
import type { FilterData } from '../../../types/filter';
import type { Book } from '../../../types/book';
import css from './RecommendedBooks.module.css';
import { PuffLoader } from 'react-spinners';

interface RecommendedBooksProps {
  searchParams: FilterData;
}

const RecommendedBooks = ({ searchParams }: RecommendedBooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getLimit = () => {
    if (window.innerWidth >= 1440) return 10; // Desktop
    if (window.innerWidth >= 768) return 8; // Tablet
    return 2; // Mobile
  };

  const [limit, setLimit] = useState(getLimit());

  useEffect(() => {
    const handleResize = () => {
      const newLimit = getLimit();
      setLimit((prevLimit) => {
        if (newLimit !== prevLimit) {
          setPage(1);
          return newLimit;
        }
        return prevLimit;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await booksAPI.getRecommended(
          page,
          limit,
          searchParams.title,
          searchParams.author,
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
  }, [searchParams.title, searchParams.author, page, limit]);

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>Recommended</h2>
        <div className={css.pagination}>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            &lt;
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      {loading ? (
        <PuffLoader color="#262626" size={100} />
      ) : (
        <ul className={css.list}>
          {books.map((book) => (
            <li key={book._id}>{book.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendedBooks;
