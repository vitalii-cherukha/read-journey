import OnboardingCard from '../../common/OnboardingCard/OnboardingCard';
import Container from '../../common/Container/Container';
import Dashboard from '../../common/Dashboard/Dashboard';
import Filters from '../../common/Filters/Filters';
import Quote from '../../common/Quote/Quote';
import RecommendedBooks from '../../common/RecommendedBooks/RecommendedBooks';
import css from './RecommendedPage.module.css';
import { useState } from 'react';
import type { FilterData } from '../../../types/filter';

const RecommendedPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data: FilterData) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <section>
      <Container>
        <div className={css.wrapper}>
          <Dashboard>
            <Filters onSubmit={handleSubmit} loading={loading} />
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
