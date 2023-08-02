import React from 'react'
import { date, defaultevent, email, event1, event2, event3, event4, makeReservation, number, placeholder_date, placeholder_email, placeholder_mobile, placeholder_name, submit, text } from '../../Common/Const';

const HomePreOrderForm = () => {

    const handleFormSubmit=(event)=>{
        event.preventDefault();
    }

  return (
    < >
        <form onSubmit={handleFormSubmit} className="d_f fd_c">
            <input type={text} placeholder={placeholder_name}/>
            <input type={email} placeholder={placeholder_email}/>
            <input type={number} placeholder={placeholder_mobile}/>
            <input type={date} placeholder={placeholder_date}/>
            <select>
                <option value={""} disabled selected >{defaultevent}</option>
                <option value={event1}>{event1}</option>
                <option value={event2}>{event2}</option>
                <option value={event3}>{event3}</option>
                <option value={event4}>{event4}</option>
            </select>
            <button type={submit}>{makeReservation}</button>
        </form>
    </>
  )
}

export default HomePreOrderForm