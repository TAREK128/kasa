import { useState } from "react"
import "../styles/Collapse.scss"
// هذا النموذج الخاص بحالة الاسهم في صفحة  الوجمو  وصفحة اباوت
//
// نستقبل هنا بخوب  التايتل والكونتات من اباوت
function Collapse({ title, content }) {

  {/*ننشئ حالة ستات هنا .. از اوبن فاريابل */}
  {/*ست ازاوبن فنكشن لتغير قيمة ازاوبن*/}
  {/* تبدا القيمة ازاوبن مغلقة*/}
  const [isOpen, setIsOpen] = useState(false)

  //انشاء فنكشن  توكلي 
  //تغير قيمة ازاوبن الى العكس 
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
       {/*عند الضغط على فنكشن توكلي التي تعكس قسمه ازاوبن*/}
       {/*ثم يضاف عنوان القائمة الذ ياتي بخوب من المكون الاب*/}
       {/**/}
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
