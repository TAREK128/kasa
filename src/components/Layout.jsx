//هذا قالب عام يستخدم لكامل صفحات الموقع المذكورة اسفل وترتيب ظهورها اسفل ووسط واخير
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


//Outlet
//هو عنصر من رياكت دوم يستخدم هنا لعرض المكونات الفرعية
// مثل مكونات الهوم والاباوت واللوجمو ....
function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
