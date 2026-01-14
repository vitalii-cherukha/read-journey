import Container from '../../common/Container/Container';
import RegisterForm from '../../common/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
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
            <RegisterForm />
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
