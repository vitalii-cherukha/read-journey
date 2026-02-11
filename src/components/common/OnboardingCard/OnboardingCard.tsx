import { Link } from 'react-router';
import css from './OnboardingCard.module.css';

const OnboardingCard = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Start your workout</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.number}>1</span>
          <p className={css.text}>
            <span className={css.textAccent}>Create a personal library:</span>{' '}
            add the books you intend to read to it.
          </p>
        </li>
        <li className={css.item}>
          <span className={css.number}>2</span>
          <p className={css.text}>
            <span className={css.textAccent}> Create your first workout:</span>{' '}
            define a goal, choose a period, start training.
          </p>
        </li>
      </ul>
      <Link to="/library" className={css.link}>
        My library
        <svg className={css.icon} width="24" height="24">
          <use href="/sprite.svg#arrow-right" />
        </svg>
      </Link>
    </div>
  );
};

export default OnboardingCard;
