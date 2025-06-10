//ملف صفحات الشقق
//useParams//لأخذ قيمة ايدي من رابط الصفحة
import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import { useState } from 'react';
import '../styles/Logement.scss';
import Dropdown from '../components/Dropdown';
import NotFound from './NotFound'
import Carousel from '../components/Carousel';
import Stars from '../components/Stars';


function Logement() {
  // تعني استخراج ايدي من الكائن الذي تُرجعه يوزبارامس
  const { id } = useParams();

  // فند فنكشن تبحث في الاريه لوجمو وترجع العنصر ايتم
  //ايتم هو ايدي خاص بكل شقة 
  //حصلنا على الايدي من الدالة التي فوق
  const logement = logements.find((item) => item.id === id);

  // إذا لم يوجد السكن --> صفحة 404
 if (!logement) return <NotFound />;


  return (
    <div className="logement-container">

     <Carousel pictures={logement.pictures} title={logement.title} />

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
        

        {/* ---والنجوم الصورة واسم صحاب الشقةt--- */}
        <div className="host-rating">

                 {/* --- النجوم--- */}
          <div className="rating">
    <Stars rating={logement.rating} />
  </div>

          <div className="host">
            <span className="host-name">{logement.host.name}</span>
            <img src={logement.host.picture}
                 alt={logement.host.name}
                 className="host-picture" />
          </div>
          </div>
      </div>


      {/* --- المستطيلات الاثنين اسفل الصفحة -- */}
      <div className="dropdowns">
      <Dropdown title="Description" content={logement.description} />
      <Dropdown title="Équipements" content={logement.equipments} />
    </div>
    

    </div>
  );
}

export default Logement;
