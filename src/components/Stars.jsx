import React from 'react';
import '../styles/Logement.scss';

//parseInt
//تحويل نص الى عدد
//rating 
//القيمة التي سوف نحولها
//10
//اي اننا نحول من النظام العشري

function Stars({ rating }) {
  const fullStars = parseInt(rating, 10);

  {/* i هنا رقم النجمة */}
  const stars = Array.from({ length: 5 }, ( _ , i ) => i < fullStars);

  return (
    <div className="rating">
      {stars.map((filled, i) => (
        <span key={i} className={filled ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default Stars;
