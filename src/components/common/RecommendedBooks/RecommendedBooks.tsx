import css from './RecommendedBooks.module.css';

const RecommendedBooks = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>Recommended</h2>
        <div className={css.pagination}>{'< >'}</div>
      </div>
      <ul className={css.list}></ul>
    </div>
  );
};

export default RecommendedBooks;
