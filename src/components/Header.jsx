// src/components/Header.jsx
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import "../styles/Header.scss"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
