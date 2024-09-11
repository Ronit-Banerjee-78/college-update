import React from 'react'
import des from "../../assets/des.png"
import congra from "../../assets/congra.png"
import pngW from "../../assets/pngwing.png"
import select from "../../assets/selec.png"
import tcxs from "../../assets/TCS-Logo-Colour-RGB.png"
import user from "../../assets/user.png"
import "./card.css"
const Card = () => {
  return (
    <>

   <div className="placement-card">
  <div className="des-box">
    {/* <img className="des-img" src="des.png" /> */}
    <img src={des} className='des-img' alt=".//" />
  </div>
  <div className="cong-box">
    {/* <img  src="./congra.png" className="cong-img"/> */}
    <img src={congra} className="cong-img" alt="nmoo" />
  </div>
  <div className="img-box">
<img className="img-box-img" src={user} />

  </div>
  <p className="candidate">Aniket Das</p>
  <div className="selec-box">
    <img className="selec-img" src={select} />
  </div>
  <div className="company-box">
    <img className="company-img" src={tcxs}/>
  </div>
  <div className="name-plate">
    <img className="np-img" src={pngW}/>
  </div>
  <div className="pcard-body">
    <h5 className="pkg">Package of Rs<span className="price"> 4.46</span> Lakhs(CTC)</h5>
    <p className="pkg_p">With Regards<br />Training &amp; Placement Cell<br />Mankar College</p>
  </div>
  <div className="des-box2">
    <img className="des-img2" src={des} />
  </div>
</div>


    </>
  )
}


export default Card