import Container from '../../common/Container/Container';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <section>
      <Container>
        <div className={css.wrapper}>
          <div className={css.formWrapper}></div>
          <div className={css.imgWrapper}>
            <img src="#" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
