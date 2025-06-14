//ملف صور الشقق وانتقالها بالاسهم
//حن نستخدم هوك يوزستات
import { useState } from 'react';
import '../styles/Logement.scss';

//Carousel
//هذا بروب قادم من لوجمو 
function Carousel({ pictures, title }) {
  //كورنت .. متغير رقم الصورة الحالية
  //سيتكرنت.. فنكشن تغير قيمة الصورة الحالية
  // سيت ستات. قيمة الصورة الحالة 0 اي الصورة الاولى
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((i) => (i + 1) % pictures.length);
  const prev = () =>
    //(i === 0) اذا كنا في اول صورة
  //? pictures.length - 1... ارجعنا الى اخر صورة
  // i - 1 ... اذا لم نكن في اخر صورة نقص بمقدار واحد 
    setCurrent((i) => (i === 0 ? pictures.length - 1 : i - 1));

  return (
    <div className="carousel">
      <img
        src={pictures[current]}
        alt={title}
        className="carousel-image"
      />

      {/*اذا كان عدد الصور اكبر من واحد اعرض الاسهم واذا لم يكن*/}
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
