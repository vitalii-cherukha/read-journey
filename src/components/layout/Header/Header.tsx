import { Link } from 'react-router';
import Container from '../../common/Container/Container';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Container>
        <div className={css.wrapper}>
          <Link className={css.logo} to="/">
            <svg className={css.logoIcon} width="42" height="17">
              <use href="/sprite.svg#icon-logo" />
            </svg>
            <span className={css.logoText}>read journey</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
