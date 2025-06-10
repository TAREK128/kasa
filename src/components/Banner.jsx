import React from 'react'
import "../styles/banner.scss";

// نستقبل بانير كاوبجكت 
// الصورة والنص قادمة من اباوت كبروب
function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>

       {/* الاشارة الاولى معناها اذا كان تكست نص اعطيه كلاس */}
       {/* التكست اش1 بخوب تاتي من ملف الهوم*/}
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  )
}

export default Banner