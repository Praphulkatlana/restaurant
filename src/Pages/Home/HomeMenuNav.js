import React from 'react'
import {Menuitems} from "../../Common/Const"
const HomeMenuNav = ({SelectedIndex,onChangeSelectedIndex}) => {
    const onSelectItem=(id) =>{
        onChangeSelectedIndex(id)
    }
  return (
    <div className='homeMenuNav_section d_f fd_r jc_c'>
       {Menuitems.map((item)=>(<div className={`item c_p ${item.id===SelectedIndex?"isSelected":""}`} key={item.id} onClick={()=>onSelectItem(item.id)}>{item.title}</div>))
    }
    </div>
  )
}

export default HomeMenuNav