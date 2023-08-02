import React,{useEffect, useState} from 'react'
import { beverages } from '../../Common/Const'
import {MenuAreaTitle,MenuAreaSubTitle} from "../../Common/Text"
import HomeMenuCard from './HomeMenuCard'
import HomeMenuNav from './HomeMenuNav'
import { filterBeverages } from './HomeUtlis'


const HomeMenuArea = () => {
  const [SelectedIndex, setSelectedIndex] = useState(1)
  const [filterBaverages, setfilterBaverages] = useState([...beverages])
  const onChangeSelectedIndex =(id)=>{
   setSelectedIndex(id);
  }

  useEffect(()=>{
    if(SelectedIndex===1){
      setfilterBaverages([...beverages])
    }else{
      setfilterBaverages([...filterBeverages(beverages,SelectedIndex)])
    }
  },[SelectedIndex])

  return (
    <section className='homeMenuArea_section d_f fd_c'>
        <div className='menuareaTitle'> 
            <h1 className='title'>{MenuAreaTitle}</h1>
            <p className='subtitle'>{MenuAreaSubTitle}</p>
        </div>
        <div className='menuareaNav'> 
            <HomeMenuNav SelectedIndex={SelectedIndex} onChangeSelectedIndex={onChangeSelectedIndex}/>
        </div>
        <div className='menuareaContent d_f jc_c'> 
          <div className='menuareaContent_container d_f fd_r jc_sb'>
            {filterBaverages.map((item)=>(<HomeMenuCard key={item.id} item={item}/>))}
          </div>
        </div>
    </section>
  )
}

export default HomeMenuArea