import React, {useState} from 'react'
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom'

export const Meet = () => {
    const [values, onChange] = useState(new Date(2017, 0, 1));
    const [date,setDate]=useState("");
  return (
    <div className='meet-container'>
        <div className='meet-intro'>
            <h1>Schedule a consultation</h1>
            <p>Let’s talk about your app idea!

Your data is processed by Technest (Nowoursynowska 143B, 02-776 Warsaw) to arrange and go through the meeting and – if specified – to send you relevant content via newsletter (from which you can unsubscribe at any time).</p>
<Link to='/contact' className='btn' >
              Send Us An Email
            </Link>
        </div>
        <div className="calender">
            <h5>You will meet Palcherin Wekesa</h5>
      <Calendar onChange={onChange} onClickDay={(e)=>setDate(e.target.value)} value={values} className="calender-items" />
    </div>

    </div>
  )
}
