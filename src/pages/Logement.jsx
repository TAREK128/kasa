import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import { useState } from 'react';
import '../styles/Logement.scss';
import Dropdown from '../components/Dropdown';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // إذا لم يوجد السكن --> صفحة 404
 if (!logement) return <Navigate to="/404" replace />;


  /* ---------- carousel ---------- */
  const [current, setCurrent] = useState(0);
  const next  = () => setCurrent((i) => (i + 1) % logement.pictures.length);
  const prev  = () => setCurrent((i) =>
    i === 0 ? logement.pictures.length - 1 : i - 1
  );

  /* ---------- النجوم ---------- */
  const fullStars = parseInt(logement.rating, 10); // من 0 إلى 5
  const stars = Array.from({ length: 5 }, (_, i) => i < fullStars);

  return (
    <div className="logement-container">
      {/* --- Carousel --- */}
      <div className="carousel">
        <img src={logement.pictures[current]}
             alt={`${logement.title} ${current + 1}`}
             className="carousel-image" />

        {logement.pictures.length > 1 && (
          <>
            <button className="carousel-arrow left"  onClick={prev}>❮</button>
            <button className="carousel-arrow right" onClick={next}>❯</button>
            <div className="carousel-counter">
              {current + 1}/{logement.pictures.length}
            </div>
          </>
        )}
      </div>

      {/* --- العنوان والمضيف --- */}
      <div className="logement-info">
        <div className="title-location">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          {/* --- tagat--- */}
        <div className="tags">
  {logement.tags.map((tag, index) => (
    <span key={index} className="tag">{tag}</span>
  ))}
</div>
        </div>
        

        <div className="host-rating">
          <div className="host">
            <span className="host-name">{logement.host.name}</span>
            <img src={logement.host.picture}
                 alt={logement.host.name}
                 className="host-picture" />
          </div>
          

          <div className="rating">
            {stars.map((filled, i) => (
              <span key={i} className={filled ? 'star filled' : 'star'}>★</span>
            ))}
            
          </div>
        </div>
      </div>
      <div className="dropdowns">
      <Dropdown title="Description" content={logement.description} />
      <Dropdown title="Équipements" content={logement.equipments} />
    </div>
    

    </div>
  );
}

export default Logement;
