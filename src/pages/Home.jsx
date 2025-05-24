import Banner from '../components/Banner'
import homeBanner from '../assets/home-banner.jpg'
import logements from '../data/logements.json'
import Card from '../components/Card'
import '../styles/Home.scss'

function Home() {
  return (
    <div>
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      
      <section className="cards-grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
