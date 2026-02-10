import { useForm } from 'react-hook-form';
import css from './Filters.module.css';

const Filters = () => {
  return (
    <form className={css.form}>
      <h3 className={css.title}>Filters:</h3>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          Book title:
          <input
            name="title"
            type="text"
            placeholder="I See You Are Interested In The Dark"
          />
        </label>
      </div>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          The author:
          <input name="author" type="text" placeholder="Hilarion Pavlyuk" />
        </label>
      </div>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          Number of pages:
          <input name="page" type="number" placeholder="664" />
        </label>
      </div>
      <button type="submit" className={css.btn}>
        Add book
      </button>
    </form>
  );
};

export default Filters;
