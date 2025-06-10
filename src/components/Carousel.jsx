//ملف صور الشقق وانتقالها بالاسهم
import { useState } from 'react';
import '../styles/Logement.scss';

function Carousel({ pictures, title }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((i) => (i + 1) % pictures.length);
  const prev = () =>
    setCurrent((i) => (i === 0 ? pictures.length - 1 : i - 1));

  return (
    <div className="carousel">
      <img
        src={pictures[current]}
        alt={title}
        className="carousel-image"
      />

      {/*اذا كان عدد الصور اكبر من واحد اعرض التالي*/}
      {pictures.length > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prev}>❮</button>
          <button className="carousel-arrow right" onClick={next}>❯</button>
          <div className="carousel-counter">
            {/*عداد رقم الصورة المعروضة مثلا 1/5*/}
            {current + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
