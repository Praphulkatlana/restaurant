import React,{useEffect, useState} from 'react'
import "./Home.scss"
import { home_background_img } from '../../Media/Urls'
import { home_logo_img } from '../../Media/Urls'
import NavBar from './NavBar'
import {homeSubtitle,hometitle,homeDescription} from "../../Common/Text"
import {checkOurMenu} from "../../Common/Const"
import Card from '../../Common/Component/Card'


const HomeIndex = () => {
    const Homestyle={
        backgroundImage:`url(${home_background_img})`
    }
const [scrolledToMenu, setscrolledToMenu] = useState(false)
const hanldeScroll=()=>{
    const homeAbout_section=document.getElementById('homeAbout_section');
    if(homeAbout_section&& window.scrollY>=homeAbout_section.offsetTop){
        setscrolledToMenu(true);
    }else{
        setscrolledToMenu(false);
    }
}


useEffect(()=>{
window.addEventListener('scroll',hanldeScroll);
return()=>{
    window.removeEventListener('scroll',hanldeScroll);
}

},[])

  return (
    <section className="HomeIndexSection d_f jc_c" style={Homestyle} >
        <div className='homeIndex_container d_f  al_c fd_c'>
            <div className='logo'>
                    <div className='img'>
                        <img src={home_logo_img}alt="logo" />
                    </div>
                 </div>
            <div className={`navbar d_f jc_c al_c ${scrolledToMenu?"fixedNavBar":""}`}> 
                <NavBar/>
            </div>
            <div className='content'> 
                <p className='subtitle'>{homeSubtitle}</p>
                <Card title={hometitle} description={homeDescription} btnText={checkOurMenu}/>
            </div>
        </div>
       
    </section>
  )
}

export default HomeIndex