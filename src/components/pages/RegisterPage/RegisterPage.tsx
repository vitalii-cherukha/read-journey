import { useState } from 'react';
import { useNavigate } from 'react-router';
import Container from '../../common/Container/Container';
import RegisterForm from '../../common/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
import type { RegisterUser } from '../../../types/user';
import { useAuthStore } from '../../../store/authStore';

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const register = useAuthStore((s) => s.register);
  const navigate = useNavigate();

  const handleSubmit = async (data: RegisterUser) => {
    setLoading(true);
    register(data.name, data.email, data.password)
      .then(() => {
        // Переадресація на recommended page при успішній реєстрації
        navigate('/recommended');
      })
      .finally(() => setLoading(false));
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
            <RegisterForm onSubmit={handleSubmit} loading={loading} />
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

export default RegisterPage;
