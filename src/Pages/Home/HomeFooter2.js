import React from 'react'
import { footer2Text1, footer2Text2 } from '../../Common/Text'
import { getCurrentYear } from './HomeUtlis'
import { FaceBookSVG,TwitterSVG, YoutubeSVG } from './SVG'

const HomeFooter2 = () => {
  return (
    <div className='HomeFooter2_section d_f fd_r al_c'>
        <div className='HomeFooter2_container d_f fd_r jc_sb al_c'>
         <div className='text'>
            <span>{footer2Text1} &copy; {getCurrentYear()} {footer2Text2}</span>    
        </div>   
         <div className='icon_container d_f fd_r'>
            <div className='icon'>
                <TwitterSVG/>
            </div>
            <div className='icon'>
                <YoutubeSVG/>
            </div>
            <div className='icon'>
                <FaceBookSVG/>
            </div>
        </div>   
        </div>
    </div>
  )
}

export default HomeFooter2