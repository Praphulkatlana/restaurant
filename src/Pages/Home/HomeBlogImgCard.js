import React from 'react'
import { comments_word, like_word } from '../../Common/Const'
import { comment, heart } from '../../Media/Urls'
import { convertDateMontIntoWord } from './HomeUtlis'

const HomeBlogImgCard = ({imgUrl,date,title,subtitle,like,comments}) => {
  return (
    <div className='HomeBlogImgCard d_f fd_c'>
        <div className='img_section'>
            <img src={imgUrl} alt="img"/>
        </div>
        <div className='date'>
            {convertDateMontIntoWord(date)}
        </div>
        <div className='title_subtitle'>
            <p className='text-1'>{title}</p>
            <p className='text-2'>{subtitle}</p>
        </div>
        <div className='like_comments d_f jc_sb'>
            <span className='like d_f al_c'>
                <img src={heart}alt={"like"} />
                {like} {like_word}
            </span>
            <span className='comment d_f al_c'>
                <img src={comment}alt={"comment"}/>
                {comments} {comments_word}
            </span>
        </div>
    </div>
  )
}

export default HomeBlogImgCard