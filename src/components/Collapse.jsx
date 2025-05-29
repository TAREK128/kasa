import { useState } from "react"
import "../styles/Collapse.scss"

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggle}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Collapse
