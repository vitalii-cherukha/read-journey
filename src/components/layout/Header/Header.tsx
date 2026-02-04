import { Link } from 'react-router';
import Container from '../../common/Container/Container';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Link className={css.logo} to="/">
            <svg className={css.logoIcon} width="42" height="17">
              <use href="/sprite.svg#icon-logo" />
            </svg>
            <span className={css.logoText}>read journey</span>
          </Link>
          <nav className={css.nav}>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <Link className={css.navLink} to="/">
                  Home
                </Link>
              </li>
              <li className={css.navItem}>
                <Link className={css.navLink} to="/library">
                  My library
                </Link>
              </li>
            </ul>
          </nav>
          <div className={css.actionsWrapper}>
            <div className={css.userWrapper}>
              <span className={css.userIcon}>{'I'}</span>
              <span className={css.userName}>{'Ilona Ratushniak'}</span>
            </div>
            <button className={css.menuBtn}>
              <svg className={css.menuIcon} width="28" height="28">
                <use href="/sprite.svg#icon-menu" />
              </svg>
            </button>
            <button className={css.actionsBtn}>Log out</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
