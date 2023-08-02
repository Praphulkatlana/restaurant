import React from 'react'

const HomeMenuCard = ({item}) => {
  return (
    <div className='HomeMenuCard_section d_f fd_r jc_sb'>
            <div className='left d_f fd_c'>
                <div className='top'>{item.name}</div>
                <div className='bottom'>{item.description}</div>
            </div>
            <div className='right'>{item.price}</div>
    </div>
  )
}

export default HomeMenuCard