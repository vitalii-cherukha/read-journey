import { useState } from 'react';
// import { useAuthStore } from '../../../store/authStore';
import Container from '../../common/Container/Container';
import RegisterForm from '../../common/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
import type { User } from '../../../types/user';

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  // const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (data: User) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <section>
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
            <img src="#" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RegisterPage;
