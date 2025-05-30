import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import bannerAbout from '../assets/banner-about.jpg';
import '../styles/About.scss';

function About() {
  return (
    <div className="about">
      <Banner image={bannerAbout} alt="Montagnes paisibles" />
      
      <div className="about-dropdowns">
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale..."
        />
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa..."
        />
        <Dropdown
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite..."
        />
        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs..."
        />
      </div>
    </div>
  );
}

export default About;
