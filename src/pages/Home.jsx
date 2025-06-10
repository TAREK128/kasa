import Banner from '../components/Banner'
import homeBanner from '../assets/home-banner.jpg'
import logements from '../data/logements.json'
import Card from '../components/Card'
import '../styles/Home.scss'

function Home() {
  return (
    <div>
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      
      <section className="cards-grid">
        {/*لوجمو الاولى فنكشن قادمة من ملف لوجمو جيسون*/}
        {/* ماب دالة تكرار في جافا سكربت*/}
        {/* بعد ماب نكرر اسم الشقة لوجمو ونضيف لها العناصر التي داخل كارت*/}
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
      {/*key={logement.id} */}
      {/* حصلنا على المفتاح كاي من لوجمو ايدي والتي تاتي من ملف لوجمو جيسون*/}
      {/*يساعدنا استخدام كاي او المفتاح من اجل ان تعرف رياكت اي من عناصر القائمة  مثال نريد ان نغيره او نحذفه*/}
    </div>
  )
}

export default Home
