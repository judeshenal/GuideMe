import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import done_job from '../../../Assets/done_job.jpg';
import '../notification.css'
import larravel from '../../../apis/larravel';

export default function Save() {
  const user= {
    userId : 1,
    userName : "subhath"
  }
  const[savedJob, setSavedJob] = useState([])

  useEffect(()=>{
    larravel.get('/savedjobs/'+user.userId,{
    })
    .then((res) => { 
      console.log("result : ", res.data)
      larravel.post('/jobs',{
        ids:res.data
      })
      .then((res) => { 
        console.log("result : ", res.data)
        setSavedJob(res.data)
    })
  .catch((err) => { 
    alert(err)
  })
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
          <h2 className='notification-page-right-content-title'>Your Liked Job List</h2>
          <div className='notification-page-card-content'>
            { savedJob.map((data,id)=>(
              <div className='notification-page-card'>
                  <img className='notification-page-card-img' src={data.img_url}/>
                  <h6 className='notification-page-card-title'>{data.name}</h6>
              </div>
            ))}
          </div>
      </div>
      </div>
    </div>
  )
}
