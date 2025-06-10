// src/components/Header.jsx
import { Link } from 'react-router-dom'
// استدعاء المكون لينك لأنه لا يسبب إعادة تحميل الصفحة 
import logo from '../assets/logo.png' 
import "../styles/Header.scss"

// لينك تو استحدمناها هنا بدل من كتابة... a لعدم تحمل الصفحة من جديد
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
