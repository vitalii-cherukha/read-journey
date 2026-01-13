import Container from '../../common/Container/Container';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <section>
      <Container>
        <div className={css.wrapper}>
          <div className={css.formWrapper}>
            <div className={css.logo}>
              <svg>
                <use href="#icon-logo" />
              </svg>
              <span>read journey</span>
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
