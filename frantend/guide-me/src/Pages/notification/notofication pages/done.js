import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import done_job from '../../../Assets/done_job.jpg';
import '../notification.css'
import larravel from '../../../apis/larravel';
import { useEffect } from 'react';

export default function Done() {
  const user= {
    userId : 1,
    userName : "subhath"
  }
  const[appliedjob, setAppliedJob] = useState([])
  useEffect(()=>{
    larravel.get('/donenotification/'+user.userId,{
    })
    .then((res) => { 
      console.log("result : ", res.data)
      setAppliedJob(res.data)
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
          <h2 className='notification-page-right-content-title'>Applied Jobs</h2>
          <div className='notification-page-card-content'>
            { appliedjob.map((data,id)=>(
              <div className='notification-page-card'>
                  <img className='notification-page-card-img' src={data.jobImgUrl}/>
                  <h6 className='notification-page-card-title'>{data.jobtitle}</h6>
              </div>
            ))}
          </div>
      </div>
      </div>
    </div>
  )
}
