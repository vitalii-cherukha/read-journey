import { useForm } from 'react-hook-form';
import css from './Filters.module.css';
import { BarLoader } from 'react-spinners';
import type { FilterData } from '../../../types/filter';

interface FiltersProps {
  onSubmit: (data: FilterData) => void;
  loading: boolean;
}

const Filters = ({ onSubmit, loading }: FiltersProps) => {
  const { register, handleSubmit } = useForm<FilterData>();

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

      <button type="submit" className={css.btn}>
        {!loading ? (
          'To apply'
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
