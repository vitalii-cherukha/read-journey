import About from '../../common/About/About';
import Container from '../../common/Container/Container';
import Dashboard from '../../common/Dashboard/Dashboard';
import Filters from '../../common/Filters/Filters';
import Quote from '../../common/Quote/Quote';
import RecommendedBooks from '../../common/RecommendedBooks/RecommendedBooks';

const RecommendedPage = () => {
  return (
    <section>
      <Container>
        <Dashboard>
          <Filters />
          <About />
          <Quote />
        </Dashboard>
        <RecommendedBooks />
      </Container>
    </section>
  );
};

export default RecommendedPage;
