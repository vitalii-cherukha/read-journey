import { useEffect, useState } from 'react';
import css from './RecommendedCard.module.css';
import { booksAPI } from '../../../api/api';
import { PuffLoader } from 'react-spinners';
import type { Book } from '../../../types/book';

const RecommendedCard = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await booksAPI.getRecommended(1, 3);
        setBooks(response.results);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>Recommended books</h2>
      </div>
      {loading ? (
        <PuffLoader color="#262626" size={60} />
      ) : (
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
      )}
    </div>
  );
};

export default RecommendedCard;
