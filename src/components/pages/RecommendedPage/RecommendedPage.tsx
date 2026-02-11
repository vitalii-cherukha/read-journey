import OnboardingCard from '../../common/OnboardingCard/OnboardingCard';
import Container from '../../common/Container/Container';
import Dashboard from '../../common/Dashboard/Dashboard';
import Filters from '../../common/Filters/Filters';
import Quote from '../../common/Quote/Quote';
import RecommendedBooks from '../../common/RecommendedBooks/RecommendedBooks';
import css from './RecommendedPage.module.css';

const RecommendedPage = () => {
  return (
    <section>
      <Container>
        <div className={css.wrapper}>
          <Dashboard>
            <Filters />
            <OnboardingCard />
            <Quote />
          </Dashboard>
          <RecommendedBooks />
        </div>
      </Container>
    </section>
  );
};

export default RecommendedPage;
