import React from "react";
//استيراد فنكشن يوزنفيكيت لانتقال بين الصفحات مثل عند الضغط على زر
import { useNavigate } from "react-router-dom";
import "../styles/Card.scss";

// مكون الكارت وهي تستقبل 3 بروب قادمة من ملف هوم
function Card({ id, title, cover }) {
  // انشاء فنكشن نفيكات قيمته قيمة يوزنفيكات للانتقال بين الصفحات
  const navigate = useNavigate();

  // انشاء فنكشن هاندكليك تشتغل عند الضغط على كارت
  function handleClick() {
    {/*  نفيكت تساوي الانتقال الى صفحة لوجمو واضافة اايدي للصفحه .. الايدي ياتي من هوم*/}
    navigate(`/logement/${id}`);
  }

  return (
    <div className="card" onClick={handleClick} >
      <img src={cover} alt={title} className="card__image" />
  <div className="card__overlay">
    <h2 className="card__title">{title}</h2>
  </div>
</div>
  );
}

export default Card;
