// src/components/Header.jsx
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' 
import "../styles/Header.scss"
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </nav>
    </header>
  )
}

export default Header
