import AddBook from '../../common/AddBook/AddBook';
import Container from '../../common/Container/Container';
import Dashboard from '../../common/Dashboard/Dashboard';
import MyLibraryBooks from '../../common/MyLibraryBooks/MyLibraryBooks';
import RecommendedCard from '../../common/RecommendedCard/RecommendedCard';
import css from './LibraryPage.module.css';

const LibraryPage = () => {
  return (
    <section>
      <Container>
        <div className={css.wrapper}>
          <Dashboard>
            <AddBook />
            <RecommendedCard />
          </Dashboard>
          <MyLibraryBooks />
        </div>
      </Container>
    </section>
  );
};

export default LibraryPage;
