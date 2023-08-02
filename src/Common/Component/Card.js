import React from 'react'

const Card = ({title="Delicious Recipes",description="asdas",btnText="Check out Menu"}) => {
  
    return (
    <section className='cardSection d_f fd_c '>
        <p className='card_title'>{title}</p>
        <p className='card_description'>{description}</p>
        <button className='card_btn c_p'>{btnText}</button>
    </section>
  )
}

export default Card