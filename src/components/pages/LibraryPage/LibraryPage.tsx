import AddBook from '../../common/AddBook/AddBook';
import Container from '../../common/Container/Container';
import Dashboard from '../../common/Dashboard/Dashboard';
import MyLibraryBooks from '../../common/MyLibraryBooks/MyLibraryBooks';
import RecommendedCard from '../../common/RecommendedCard/RecommendedCard';

const LibraryPage = () => {
  return (
    <section>
      <Container>
        <Dashboard>
          <AddBook />
          <RecommendedCard />
        </Dashboard>
        <MyLibraryBooks />
      </Container>
    </section>
  );
};

export default LibraryPage;
