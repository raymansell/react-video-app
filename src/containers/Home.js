import '../assets/styles/App.scss';
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// import useFetchVideos from '../hooks/useFetchVideos';

// const API = 'http://localhost:3001/initialState';

const Home = () => {
  // const videos = useFetchVideos(API);

  // const initialState = videos;

  const { myList, trends, originals } = useSelector(
    ({ myList, trends, originals }) => {
      return { myList, trends, originals };
    }
  );

  return (
    <>
      <SearchBar />

      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
