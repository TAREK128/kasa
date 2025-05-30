import '../styles/Footer.scss';
import LOGO2 from '../assets/logo2.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={LOGO2} alt="Kasa logo2" className="logo2" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
