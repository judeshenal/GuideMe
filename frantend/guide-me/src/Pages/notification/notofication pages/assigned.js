import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import done_job from '../../../Assets/done_job.jpg';
import '../notification.css'
import larravel from '../../../apis/larravel';
import { useEffect } from 'react';

export default function Assigned() {
  const user= {
    userId : 1,
    userName : "subhath"
  }
  const[consultant, setConsultant] = useState([])

  useEffect(()=>{
    larravel.get('/assignednotification/'+user.userId,{
    })
    .then((res) => { 
      console.log("result : ", res.data)
      setConsultant(res.data)
  })
.catch((err) => { 
  alert(err)
})
  },[])
  return (
    <div>
       <Button variant="link" className='rounded-circle'><Link to="/notification"><FaArrowCircleLeft color='#000000' /></Link></Button>
    <div className='notification-page-content'>
       <div className='notification-page-left-content'>
          <img src={done_job} className='notification-page-left-content-img'/>
       </div>
       <div className='notification-page-right-content'>
          <h2 className='notification-page-right-content-title'>Your Assigned Consultants</h2>
          <div className='notification-page-assigned-card-content'>
            { consultant.map((data,id)=>(
              <div className='notification-page-assigned-card'>
                  <h5 className='notification-page-card-text'>{data.name}</h5>
                  <hr/>
                  <h6 className='notification-page-card-text'>{data.position}</h6>
                  <p className='notification-page-card-text'>{data.company}</p>
              </div>
            ))}
          </div>
      </div>
      </div>
    </div>
  )
}
