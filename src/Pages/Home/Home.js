import React from 'react'
import HomeAbout from './HomeAbout'
import HomeBlog from './HomeBlog'
import HomeIndex from './HomeIndex'
import HomeMenuArea from './HomeMenuArea'
import HomePreOrder from './HomePreOrder'
import HomeFooter from './HomeFooter'
import HomeFooter2 from './HomeFooter2'
const Home = () => {
  

  return (
   <>
   <span id='home'>
      <span id={1}>
        <HomeIndex/>
      </span>
      <span id={2}>
        <HomeAbout/>
      </span>
      <span id={3}>
        <HomeMenuArea/>
      </span>
      <span id={4}>
        <HomePreOrder/> 
      </span>
      <span id={5}>
        <HomeBlog/>
      </span>
      <span id={6}>
        <HomeFooter/>
        <HomeFooter2/>
      </span>
   </span>
   </>
  )
}

export default Home