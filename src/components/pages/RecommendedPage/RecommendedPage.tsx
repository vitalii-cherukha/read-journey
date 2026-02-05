import Container from '../../common/Container/Container';
import Dashboard from '../../common/Dashboard/Dashboard';
import Filters from '../../common/Filters/Filters';
import RecommendedBooks from '../../common/RecommendedBooks/RecommendedBooks';

const RecommendedPage = () => {
  return (
    <section>
      <Container>
        <Dashboard>
          <Filters />
        </Dashboard>
        <RecommendedBooks />
      </Container>
    </section>
  );
};

export default RecommendedPage;
