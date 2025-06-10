import { useState } from 'react'
import '../styles/Dropdown.scss'
import arrowIcon from '../assets/arrow.svg' 

//انشاء مكون دروبداون يستقبل تايتل و كونتانت قادمة من ملف ابوت
function Dropdown({ title, content }) {
  //لماذا نستخدم [isOpen, setIsOpen]
  //لأن useState تُرجع زوجًا من القيم:
  //المتغر الاول *از اوبن* القيمة الحالية وهي مغلقة
  //المتغير الثاني *سيت ازن ااوبن* التي تستخدم لعكس قيمة ازاوبن
  const [isOpen, setIsOpen] = useState(false)

  //انشاء فنكشن *توكلي دروبداون* قيمته  تساوي عكس قيمة ازوبن الاساسية التي هي مغلقة بالاساس
  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="dropdown">
     {/* عند الضغط عليه نشغّل ..toggleDropdown لتفتح أو تغلق القائمة */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        {/* تدوير السهم . فتح يضاف كلاس اوبن . اغلاق لا يضاف شيء*/}
        <img
          src={arrowIcon}
          alt="Toggle"
          className={`arrow ${isOpen ? 'open' : ''}`}
        />
      </div>

      {/*اذا كان الفايربل ترو يعرض محتوى الدف الذي اسفل */}
      {isOpen && (
        <div className="dropdown-content">
          {/*هذا يفحص اذا كانت كونتانت اريه قائمة او لا */}
          {Array.isArray(content)

          //*هنا ايتم هو قيمة اي النص في الارية كونتينت. واندكس رقمها */\
          //ماب هنا هي فنكشن خاص بالاريه كونتينت
          // تمر على كل العناصر وترجع عنصر واحد
          //كاي نعطي مفتاح فريد لكل عنصر بالفنكشن
          //هنا كاي  يساوي اندكس اي مفتاح العنصر هو الاندكس القادم من الفنكشن

            ? content.map((item, index) => <p key={index}>{item}</p>)
            //هنا اذا كان كونتينت ليس اريه اعرضها كنص
            : <p>{content}</p>}
        </div>
      )}
    </div>
  )
}

export default Dropdown
