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

  
  const stars = Array.from({ length: 5 }, ( _ , i ) => i < fullStars);
//filled
//قيمة النجمة الحالية القادمة من السطر 15
//i هو رقم النجمة 
//map تُستخدم عندما تريد تكرار العناصر الموجودة داخل المصفوفة، وتُرجع مصفوفة جديدة بعد تعديل كل عنصر
  return (
    <div className="rating">
      {stars.map((filled, i) => (
        <span key={i} className={filled ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default Stars;
