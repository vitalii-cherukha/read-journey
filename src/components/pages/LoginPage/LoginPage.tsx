import Container from '../../common/Container/Container';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <section>
      <Container>
        <div className={css.wrapper}>
          <div className={css.formWrapper}>
            <div className={css.logo}>
              <svg className={css.logoIcon} width="42" height="17">
                <use href="/sprite.svg#icon-logo" />
              </svg>
              <span className={css.logoText}>READ JOURNEY</span>
            </div>
          </div>
          <div className={css.imgWrapper}>
            <img src="#" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
