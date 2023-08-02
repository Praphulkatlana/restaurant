import React from 'react'
import { preOrderSubTitle, preOrderTitle } from '../../Common/Text'
import { home_preOrder_img } from '../../Media/Urls'
import HomePreOrderForm from './HomePreOrderForm'

const HomePreOrder = () => {
    const preOrderStyle={
        backgroundImage: `url(${home_preOrder_img})`
    }
  return (
    <div className="preOrderSection d_f fd_r jc_c al_c" style={preOrderStyle}>
        <div className='overlay'></div>
       <div className='preOrderContainer d_f fd_r jc_sb al_c'>
        <div className='preOrdertext'>
                <h2>{preOrderTitle}</h2>
                <p>{preOrderSubTitle}</p>
            </div>
            <div className='preOrderform'>
                <HomePreOrderForm/>
            </div>
       </div>
    </div>
  )
}

export default HomePreOrder