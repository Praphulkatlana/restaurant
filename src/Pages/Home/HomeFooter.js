import React from 'react'
import { email, footer_number1, footer_number2, placeholder_email } from '../../Common/Const'
import { address, ContactUs, Monday, Newsletter, NewsletterText, OpeningHours, Saturday, Sunday, time1, time2, time3 } from '../../Common/Text'
import HomeFooterDayCard from './HomeFooterDayCard'
import {RightArrowSVG } from './SVG'

const HomeFooter = () => {
  return (
    <div className='Home_footer_section d_f '>
        <div className='Home_footer_container d_f fd_r jc_sa'>
          <div className='one'>
            <p className='title'>{OpeningHours}</p>
            <div className='days'>
             <HomeFooterDayCard day={Monday} time={time1}/>
             <HomeFooterDayCard day={Saturday} time={time2}/>
             <HomeFooterDayCard day={Sunday} time={time3}/>
            </div>
          </div>
        <div className='two'>
          <p className='title'>{ContactUs}</p>
          <p className='address'>{address}</p> 
          <div className='number'>
            <p>{footer_number1}</p>
            <p>{footer_number2}</p>
          </div>
        </div>
        <div className='three'>
          <p className='title'>{Newsletter}</p>
          <p className='text'>{NewsletterText}</p>
          <div className='subscribe d_f jc_sb'>
            <input type={email} placeholder={placeholder_email}/>
            <button>{<RightArrowSVG/> }</button> 
          </div>  
        </div>
        </div>
    </div>
  )
}

export default HomeFooter