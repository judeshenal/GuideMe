import React, { useEffect, useState } from 'react'
import homepage from '../../Assets/homepage.png'
import '../HomePage.css'
import Footer from '../../components/Footer';
import JobVacancies from '../job post/jobVacancies';
import { useParams } from 'react-router-dom';
import webscraping from '../../apis/webscraping';

export default function CompanyDetails() {
  const [moreDetails , setMoreDetails] = useState({})
  const {mid} = useParams()
  console.log(mid)
  useEffect(()=>{
    //get mongo details
    console.log("hello")
    webscraping.get('/getById/'+mid,{
        // headers:{'X-CSRF-TOKEN':'i51baUkDwKJVyap7iNbfpPaKUv8lBMdcSr1ytYPX'}
    })
    .then((res) => { 
      console.log("result : ", res.data)
      setMoreDetails(res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  },[])
  return (
    <div >
    <JobVacancies/>
      {/* <h1>Company Details</h1> */}
    </div>
  )
}
