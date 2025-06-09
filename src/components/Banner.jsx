import React from 'react'
import "../styles/banner.scss";

// نستقبل بانير كاوبجكت 
// الصورة والنص قادمة من اباوت كبروب
function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>

       {/* الاشارة الاولى معناها اذا كان تكست نص اعطيه كلاس */}
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  )
}

export default Banner