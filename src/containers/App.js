import useFetchVideos from '../hooks/useFetchVideos';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const API = 'http://localhost:3001/initialState';

const App = () => {
  const videos = useFetchVideos(API);

  const initialState = videos;

  return (
    <div className='App'>
      <Header />
      <SearchBar />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
