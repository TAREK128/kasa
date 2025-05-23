import Banner from '../components/Banner';
import homeBanner from '../assets/home-banner.jpg';



function Home() {
  return (
    <div>
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
    </div>
  );
}

export default Home;
