import { Button } from '@mui/material'
import { width } from '@mui/system';
import React, { useState } from 'react'
import './Slots.css';
import zoomshedule from '../apis/zoomshedule';
import larravel from '../apis/larravel';
import { Link } from 'react-router-dom';
//import Stack from '@mui/material/Stack';




function Slots() {

  const [message, setMessage] = useState({
    msgTxt:"",
    msgOpacity: 0
  });
  const [meet_link , setMeetLink] = useState("")
  const user = {
    id:1,
    email:"2000daredevil@gmail.com"
  }

  async function addMeeting(time){
    await zoomshedule.get('/schedule_meeting/'+time+'/20-04',{
    })
    .then( async (res) => { 
      console.log("result : ", res.data)
      alert(res.data.meetingUrl)
      setMeetLink(res.data.meetingUrl)
      //send mail to user
      await sendEmail(res.data.meetingUrl)
      await addSlotToDb(time ,res.data.meetingUrl)
  })
    .catch((err) => { 
    alert(err)
  })

  }

 async function sendEmail(link){
    await larravel.post('/mail',{
      email:user.email,
      link:link
    })
    .then((res) => { 
      console.log("result : ", res.data)
      alert(res.data)
  })
    .catch((err) => { 
    alert(err)
  })

  }

  async function addSlotToDb(time,link){
    console.log(link)
   await larravel.post('/slot/add',{
      time_slot:time,
      userId:user.id,
      meeting_link:String(link)
    })
    .then((res) => { 
      console.log("result : ", res.data)
  })
    .catch((err) => { 
    alert(err)
  })

  }

  async function handleClick(text , time){
    setMessage((prev) => ({...prev, msgTxt:text, msgOpacity:40}))
    const link = await addMeeting(time)
    window.location.href="/paymentPage";
  }

  return (
    <div className='buttons'>
      <h2>Pick Your Slot</h2>
        <div className="lines">
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("07:00 - 08:00" , "07:00")} value="07:00 - 08:00" variant='outlined'>07:00 - 08:00</Button>
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("08:00 - 09:00" , "08:00")} value="08:00 - 09:00" variant='outlined'>08:00 - 09:00</Button>
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("09:00 - 10:00" , "09:00")} value="09:00 - 10:00" variant='outlined'>09:00 - 10:00</Button>
            <Button  onClick={()=>handleClick("10:00 - 11:00", "10:00")} value="10:00 - 11:00" variant='outlined'>10:00 - 11:00</Button>
        </div>
        <div className="lines">
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("11:00 - 12:00", "11:00")} value="11:00 - 12:00" variant='outlined'>11:00 - 12:00</Button>
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("12:00 - 13:00", "12:00")} value="12:00 - 13:00" variant='outlined'>12:00 - 13:00</Button>
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("13:00 - 14:00", "13:00")} value="13:00 - 14:00" variant='outlined'>13:00 - 14:00</Button>
            <Button onClick={()=>handleClick("14:00 - 15:00", "14:00")} value="14:00 - 15:00" variant='outlined'>14:00 - 15:00</Button>
        </div>
        <div className="lines">
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("15:00 - 16:00", "15:00")} value="15:00 - 16:00" variant='outlined'>15:00 - 16:00</Button>
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("16:00 - 17:00", "16:00")} value="16:00 - 17:00" variant='outlined'>16:00 - 17:00</Button>
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("17:00 - 18:00", "17:00")} value="17:00 - 18:00" variant='outlined'>17:00 - 18:00</Button>
            <Button onClick={()=>handleClick("18:00 - 19:00", "18:00")} value="18:00 - 19:00" variant='outlined'>18:00 - 19:00</Button>
        </div>
        <div className="lines">
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("19:00 - 20:00", "19:00")} value="19:00 - 20:00" variant='outlined'>19:00 - 20:00</Button>
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("20:00 - 21:00", "20:00")} value="20:00 - 21:00" variant='outlined'>20:00 - 21:00</Button>
            <Button style={{marginRight: '10px'}} onClick={()=>handleClick("15:00 - 16:00", "21:00")} value="15:00 - 16:00" variant='outlined'>21:00 - 22:00</Button>
            <Button onClick={()=>handleClick("21:00 - 22:00", "22:00")} value="21:00 - 22:00" variant='outlined'>22:00 - 23:00</Button>
        </div>
        <div style={{width:"80%", height:100, margin:"auto", paddingTop:40, opacity:message.msgOpacity}}>
          <h3>Hurray! Your meeting is scheduled</h3>
          <h3>Your meeting time is {message.msgTxt} </h3>
        </div>
    </div>
  )
}

export default Slots;