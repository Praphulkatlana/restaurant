import React from 'react'
import { homeAbout_img } from '../../Media/Urls'
import {homeAboutTitle,homeAboutDescription} from "../../Common/Text"
import {viewFullMenu} from "../../Common/Const"
import Card from '../../Common/Component/Card'

const HomeAbout = () => {
  return (
    <section className='homeAbout_section d_f jc_c al_c fd_r' id='homeAbout_section'>
     <Card title={homeAboutTitle} description={homeAboutDescription} btnText={viewFullMenu}/>
     <div className='imgSection'>
        <img src={homeAbout_img} alt="img" />
     </div>
    </section>
  )
}

export default HomeAbout