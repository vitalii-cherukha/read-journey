import { Link } from 'react-router';
import Container from '../../common/Container/Container';
import css from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            {!isMenuOpen ? (
              <button
                onClick={() => setIsMenuOpen(true)}
                type="button"
                className={css.menuBtn}
              >
                <svg className={css.menuIcon} width="28" height="28">
                  <use href="/sprite.svg#icon-menu" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(false)}
                type="button"
                className={css.menuBtn}
              >
                <svg className={css.menuIcon} width="28" height="28">
                  <use href="/sprite.svg#icon-exit" />
                </svg>
              </button>
            )}
            <button type="button" className={css.actionsBtn}>
              Log out
            </button>
          </div>
        </div>

        <div
          className={`${css.burgerMenuWrapper} ${isMenuOpen ? css.isOpen : ''}`}
        >
          <nav className={css.burgerMenuNav}>
            <ul className={css.burgerMenuNavList}>
              <li className={css.burgerMenuNavItem}>
                <Link
                  className={css.burgerMenuNavLink}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className={css.burgerMenuNavItem}>
                <Link
                  className={css.burgerMenuNavLink}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  to="/library"
                >
                  My library
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={css.actionsBtnMobile}
          >
            Log out
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
