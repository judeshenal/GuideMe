import React, { useState } from "react";
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


const JobPost = () => {
    const [showInput, setShowInput] = useState(false);

    const unSetMouse = () => {
      setShowInput(false);
    };
  
    const setMouse = () => {
      setShowInput(true);
    };
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

        <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
          <span className='write'>
            <Link className="link" to="/write">IT</Link>
          </span>
          </p></Col>

        <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
          <span className='write'>
            <Link className="link" to="/write">Education</Link>
          </span>
        </p></Col>

        <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
          <span className='write'>
            <Link className="link" to="/write">Chef</Link>
          </span>
        </p></Col>

        <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
          <span className='write'>
            <Link className="link" to="/write">Fashion & Design</Link>
          </span>
        </p></Col>



      </Row>

      <Row>
        {/* <Col sx={6}></Col>
            <Col sx={3}><img src={jobPostImage}></img></Col>
            <Col sx={2}><p>description</p></Col> 
            <Col sx={1}><i class="bi bi-bookmarks"></i></Col>
        <Col sx={6}></Col> */}

      </Row>
      <table>
        <tr>

          {/* // component start */}
          <td><img src={ll} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>Full Stack Software Engineer</p></Row>
            <Row><p style={{ color: "#86838" }}>"We build custom software, mobile apps, websites, and digital products."Address:Galle Rd, Colombo 03000,</p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>
          {/* // componentend */}

          <td><img src={tt} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>Tutopiya</p></Row>
            <Row><p style={{ color: "#86838" }}>434, Level 4, A-wing, Dynasty Business Park, Andheri Kurla Road, Andheri East, Mumbai, Maharashtra-400059</p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>

          <td><img src={bb} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>Business Analyst</p></Row>
            <Row><p style={{ color: "#86838" }}>Crossover is the world's #1 source of full-time remote jobs. Our clients offer top-tier pay for top-tier talent. </p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>

        </tr>


        <tr>

          {/* // component start */}
          <td><img src={pp} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>Python Developer</p></Row>
            <Row><p style={{ color: "#86838" }}>CDAZZDEV is a global company that provides dazzling solutions for IT and Cybersecurity related needs in a customercentric manner.</p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>
          {/* // componentend */}

          <td><img src={dd} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>Data Entry Operater</p></Row>
            <Row><p style={{ color: "#86838" }}>Basic Computer Knowledge MS Excel & MS Word Knowledge Minimum Experience in Similar Job More Details ,Hotline / Whats app : 0766307888
</p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>

          <td><img src={ii} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>iOS Developer</p></Row>
            <Row><p style={{ color: "#86838" }}>We’re looking for highly motivated iOS Developers based in Colombo, Sri Lanka who are passionate about their work. </p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>

        </tr>

        <tr>

          {/* // component start */}
          <td><img src={oo} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>Operations Associate</p></Row>
            <Row><p style={{ color: "#86838" }}>By building smart tech solutions, we've empowered our team of property experts to deliver transparent.</p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>
          {/* // componentend */}

          <td><img src={uu} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>UX Writer</p></Row>
            <Row><p style={{ color: "#86838" }}>We are looking for a talented person with a passion for UX to join our design team. As a UX Writer, you will be responsible for creating efficient and engaging content for our apps, </p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>

          <td><img src={ff} style={{ height: '50px', width: '50px' }} ></img></td>
          <td style={{ maxWidth: "300px", padding: "20px" }}>
            <Row><p style={{ color: "#000000", fontWeight: "bold" }}>Frontend Developer</p></Row>
            <Row><p style={{ color: "#86838" }}><center></center>You will be part of Kleros’ software development team, working closely with the team on open source code. You will develop front ends that bring Kleros to life: write code.</p></Row>
            <Row><Link to="/company-details"><p style={{ color: "#5559f3", fontWeight: "bold" }}>View more</p></Link></Row>
          </td>
          <td><img src={bookMarks} style={{ height: '18px', width: '100px' }} ></img></td>

        </tr>


      </table>
      {/* <div className='footer'>
      <Footer/>
      </div> */}
    </Container>
    <Footer/>
    </div>
    
  );
};

export default JobPost;