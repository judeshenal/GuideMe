import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import '../notification.css'
import larravel from '../../../apis/larravel';

export default function Participate() {
  const user= {
    userId : 1,
    userName : "subhath"
  }
  const[session, setSession] = useState([])

  useEffect(()=>{
    larravel.get('/participatingnotification/'+user.userId,{
    })
    .then((res) => { 
      console.log("result : ", res.data)
      setSession(res.data)
  })
.catch((err) => { 
  alert(err)
})
  },[])

  return (
    <div>
       <Button variant="link" className='rounded-circle'><Link to="/notification"><FaArrowCircleLeft color='#000000' /></Link></Button>
    <div>
          <h2 className='notification-page-participate-content-title'>Consultant sessions you have joined</h2>
          <table className='notification-page-participate-content'>
            { session.map((data,id)=>(
              <tr className='notification-page-participate-row'>
                  <td className='notification-page-participate-data'>{data.consultant}</td>
                  <td className='notification-page-participate-data'>{data.date}</td>
                  <td className='notification-page-participate-data'>{data.duration}</td>
                  <td className='notification-page-participate-data'>{data.regarding}</td>
                  <hr/>
              </tr>
            ))}
          </table>
      </div>
      </div>
   
  )
}
