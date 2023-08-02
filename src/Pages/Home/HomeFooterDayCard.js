import React from 'react'

const HomeFooterDayCard = ({day,time}) => {
  return (
    <div className='HomeFooterDayCard d_f jc_sb'>
        <span>{day}</span>
        <span>{time}</span>
    </div>
  )
}

export default HomeFooterDayCard