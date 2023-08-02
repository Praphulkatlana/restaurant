import React from 'react'
import {HomeBlogTitle,HomeBlogSubTitle} from '../../Common/Text'
import {HomeBlogCardArray} from '../../Common/Const'
import HomeBlogImgCard from './HomeBlogImgCard'
const HomeBlog = () => {
  return (
    <div className='homeblog_section d_f fd_c'>
           <div className='text'>
             <h2>{HomeBlogTitle}</h2>
             <p>{HomeBlogSubTitle}</p>
           </div>
           <div className='card_container d_f fd_r jc_c'>
                {HomeBlogCardArray.map((item)=>(<HomeBlogImgCard key={item.id} imgUrl={item.imgUrl} title={item.title}subtitle={item.subtitle} date={item.date} like={item.likes} comments={item.comments}/>)) }
                
           </div>
    </div>
  )
}

export default HomeBlog