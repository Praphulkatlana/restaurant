import React,{useState,useContext} from 'react'
import { ScrollContext } from '../../App';
import { menu, NavItems } from '../../Common/Const'
import { UpArrowSVG,XSymbol,MenuLine } from './SVG';
const NavBar = () => {
const {scrolledTo}=useContext(ScrollContext);
const [isMobNavBarExpend, setisMobNavBarExpend] = useState(false)

const ScrollToClickPage=(id)=>{
  onExpendNavBar()
  let sectionToScroll=document.getElementById(id)
    if(sectionToScroll){
      sectionToScroll.scrollIntoView({behavior:'smooth'})
    }
}

const scrollToTop=()=>{
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  })
}
const onExpendNavBar=()=>{
  setisMobNavBarExpend(!isMobNavBarExpend)
}
  return (
    <section className='navbarSection d_f jc_c al_c'>

      <p className='desk_hide'>{menu}</p>

      <span className={`overlay d_f fd_r jc_sa ${isMobNavBarExpend?"":"mob_hide"}`}>
        <ul className='d_f fd_r'>
          {NavItems.map((item)=><li key={item.id} className={`${item.id===scrolledTo?"active":""}`} onClick={()=>ScrollToClickPage(item.id)}>{item.name}</li>)}
        </ul>
          <p className={`desk_hide ${isMobNavBarExpend?"":"hide"}`} onClick={onExpendNavBar}><XSymbol/></p>
      </span>  

       <p className='desk_hide' onClick={onExpendNavBar}><MenuLine/></p>

       <div className={`scrollToTop d_f jc_c al_c ${scrolledTo===1?"dis_none":""}`} onClick={scrollToTop}>
         <UpArrowSVG/>
        </div>

    </section>
  )
}

export default NavBar