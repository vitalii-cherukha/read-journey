import { useState } from 'react';
// import { useAuthStore } from '../../../store/authStore';
import Container from '../../common/Container/Container';
import LoginForm from '../../common/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import type { LoginUser } from '../../../types/user';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  // const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (data: LoginUser) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <section className={css.section}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.formWrapper}>
            <div className={css.logo}>
              <svg className={css.logoIcon} width="42" height="17">
                <use href="/sprite.svg#icon-logo" />
              </svg>
              <span className={css.logoText}>read journey</span>
            </div>
            <h1 className={css.title}>
              Expand your mind, reading{' '}
              <span className={css.titleAccent}>a book</span>
            </h1>
            <LoginForm onSubmit={handleSubmit} loading={loading} />
          </div>
          <div className={css.imgWrapper}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet="/src/assets/images/title-img-desktop.webp 1x, /src/assets/images/title-img-desktop@x2.webp 2x"
              />
              <img
                className={css.img}
                src="/src/assets/images/title-img-mobile.webp"
                srcSet="/src/assets/images/title-img-mobile.webp 1x, /src/assets/images/title-img-mobile@x2.webp 2x"
                alt="Reading illustration"
              />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
