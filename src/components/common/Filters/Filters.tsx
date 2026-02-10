import { useForm } from 'react-hook-form';
import css from './Filters.module.css';
import { BarLoader } from 'react-spinners';

type FilterData = {
  title: string;
  author: string;
  page: number;
};

interface FiltersProps {
  onSubmit: (data: FilterData) => void;
  loading: boolean;
}

const Filters = ({ onSubmit, loading }: FiltersProps) => {
  const { register, handleSubmit } = useForm<FilterData>();

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={css.title}>Filters:</h3>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          Book title:
          <input
            {...register('title')}
            type="text"
            placeholder="I See You Are Interested In The Dark"
          />
        </label>
      </div>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          The author:
          <input
            {...register('author')}
            type="text"
            placeholder="Hilarion Pavlyuk"
          />
        </label>
      </div>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          Number of pages:
          <input {...register('page')} type="number" placeholder="664" />
        </label>
      </div>
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

export default Filters;
