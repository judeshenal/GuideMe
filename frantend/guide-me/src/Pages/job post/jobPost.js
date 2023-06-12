import React, { useEffect, useState } from "react";
import Footer from '../../components/Footer';
import './jobPost.css'
import jobPostImage from '../../Assets/image.jpg'
import search from '../../Assets/search.png'
import bookMarks from '../../Assets/bookmarks.svg'
import ll from '../../Assets/ll.png'
import tt from '../../Assets/tt.jpg'
import bb from '../../Assets/bb.png'
import dd from '../../Assets/dd.png'
import ii from '../../Assets/ii.png'
import oo from '../../Assets/oo.png'
import uu from '../../Assets/uu.png'
import ff from '../../Assets/ff.png'
import pp from '../../Assets/pp.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';  
import Button from '@mui/material/Button';
import Navbar  from "../../components/Header";
import * as RiIcons from "react-icons/ri";
import larravel from "../../apis/larravel";
import { hover } from "@testing-library/user-event/dist/hover";


const JobPost = () => {
    const [showInput, setShowInput] = useState(false);
    const [categories , setCategories] = useState([])
    const [jobs , setJobs] = useState(["job1" , "job2" , "job3" , "job4"])
    const [showCat , setShowCat] = useState(1)
    const [jobs_shoow , setJobsShow] = useState(false)
    const user= {
      userId : 1,
      userName : "subhath"
    }

    useEffect(()=>{
      //get cats
      larravel.get('/categories',{
        
      })
      .then((res) => { 
        console.log("result : ", res.data)
        setCategories(res.data)
    })
  // Catch errors if any
  .catch((err) => { 
    alert(err)
  })
      //get default cat's jobs
      larravel.get('/jobs/1',{
      })
      .then((res) => { 
        console.log("result : ", res.data)
        setJobs(res.data)
        console.log("hello")
      var jobs_inner = []
      var jobs_copy = []
      var i = 0
      for(let job in res.data){
        if(i>=3){
          jobs_copy.push(jobs_inner)
          jobs_inner = []
          i=0
        }
        console.log(res.data[job])
          jobs_inner.push(res.data[job])
          i++     
      }
      jobs_copy.push(jobs_inner)
      console.log(jobs_copy)
      setJobs(jobs_copy)
      setJobsShow(true)
    })
  // Catch errors if any
  .catch((err) => { 
    alert(err)
  })
      
    },[])

    function searchJob(key){
      larravel.get('/searchJobs/'+key,{
      })
      .then((res) => { 
        console.log("result : ", res.data)
        setJobs(res.data)
        console.log("hello")
      var jobs_inner = []
      var jobs_copy = []
      var i = 0
      for(let job in res.data){
        if(i>=3){
          jobs_copy.push(jobs_inner)
          jobs_inner = []
          i=0
        }
        console.log(res.data[job])
          jobs_inner.push(res.data[job])
          i++     
      }
      jobs_copy.push(jobs_inner)
      console.log(jobs_copy)
      setJobs(jobs_copy)
      setJobsShow(true)
    })
  // Catch errors if any
  .catch((err) => { 
    alert(err)
  })
    }

    function selectCat(id){
      larravel.get('/jobs/'+id,{
      })
      .then((res) => { 
        console.log("result : ", res.data)
        setJobs(res.data)
        console.log("hello")
      var jobs_inner = []
      var jobs_copy = []
      var i = 0
      for(let job in res.data){
        if(i>=3){
          jobs_copy.push(jobs_inner)
          jobs_inner = []
          i=0
        }
        console.log(res.data[job])
          jobs_inner.push(res.data[job])
          i++     
      }
      jobs_copy.push(jobs_inner)
      console.log(jobs_copy)
      setJobs(jobs_copy)
      setJobsShow(true)
    })
  // Catch errors if any
  .catch((err) => { 
    alert(err)
  })
    }

    function getMoreDetails(id){
      //get more details by job id
    }
    
    const unSetMouse = () => {
      setShowInput(false);
    };
  
    const setMouse = () => {
      setShowInput(true);
    };

    function saveJob(id){
      larravel.post('/savedjobs',{
        userId:user.userId,
        jobId:id
      })
      .then((res) => { 
        console.log("result : ", res.data)
        alert(res.data)
    })
  // Catch errors if any
  .catch((err) => { 
    alert(err)
  })
    }
  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={jobPostImage}  style={{height:'287px',width:'600%'}}/>
    //   <Card.Body>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the  bulk of the card's content.
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    
    <div>
     <Navbar/>
    
    <Container>
       
        
    <Row style={{margin: '50px 0 0 0'}}>
        <Col style={{ width: '100%', height: '500px', overflow: 'hidden' }}> <img src={jobPostImage} style={{width: '100%'}}  ></img></Col>
        <Col style={{position: 'absolute', margin: '220px 0 0 50px', width:'80%'}}><h1 style={{ color: 'white' }}>What Jobs Are You Looking <br/>For When You Migrate?</h1></Col>
      </Row>
      <hr />


      <Row style={{ background: "#eaeaea", marginLeft: "0px", marginRight: "0px" }}>
        <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>Browse Job Categories</p></Col>
       </Row>
       <Row style={{ background: "#eaeaea", marginLeft: "0px", marginRight: "0px" }}>
    
        <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
          <span className='write'>
          {showInput ? (
            <li className="nav-item search px-3 pt-2">
              | &nbsp;
              <input
                placeholder="Search..."
                onMouseLeave={unSetMouse}
                onMouseEnter={setMouse}
                onChange={e=>searchJob(e.target.value)}
              />
            </li>
          ) : (
            <li className="nav-item pt-2 px-3">
              | &nbsp;
              <RiIcons.RiSearchLine
                size={20}
                onMouseLeave={unSetMouse}
                onMouseEnter={setMouse}
              />
            </li>
          )}
          </span>
        </p></Col>

        {categories.map((cat)=>(
          <Col><p style={{ color: "#02447c", fontWeight: "bold" ,cursor:"pointer"}}>
          <span className='write'>
            <p className="link" onClick={(e)=>selectCat(cat.id)}>{cat.name}</p>
          </span>
        </p></Col>
        ))}


      </Row>

      <Row>
        {/* <Col sx={6}></Col>
            <Col sx={3}><img src={jobPostImage}></img></Col>
            <Col sx={2}><p>description</p></Col> 
            <Col sx={1}><i class="bi bi-bookmarks"></i></Col>
        <Col sx={6}></Col> */}

      </Row>
      {jobs_shoow&&<table>
        {jobs.map((job_inner)=>(
          <tr>
            {job_inner.map((job)=>(
              <td style={{padding : '10px'}}>
                <td><img src={ll} style={{ height: '50px', width: '50px' }} ></img></td>
                <td style={{ maxWidth: "300px" }}>
                <Row><p style={{ color: "#000000", fontWeight: "bold" }}>{job.name}</p></Row>
                <Row><p style={{ color: "#86838" }}>"We build custom software, mobile apps, websites, and digital products."Address:Galle Rd, Colombo 03000,</p></Row>
                <Row><Link to={"/company-details/"+job.mongo_id}><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
                </td>
                <td><img src={bookMarks} style={{ height: '18px', width: '100px' , cursor:'pointer'}} onClick={(e)=>saveJob(job.id)}></img></td>
              </td>
            ))}
        </tr>
        ))}
      </table>
      }
      {/* <div className='footer'>
      <Footer/>
      </div> */}
    </Container>
    <Footer/>
    </div>
    
  );
};

export default JobPost;