import { useState } from 'react'
import '../styles/Dropdown.scss'
import arrowIcon from '../assets/arrow.svg' 

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="Toggle"
          className={`arrow ${isOpen ? 'open' : ''}`}
        />
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {Array.isArray(content)
            ? content.map((item, index) => <p key={index}>{item}</p>)
            : <p>{content}</p>}
        </div>
      )}
    </div>
  )
}

export default Dropdown
