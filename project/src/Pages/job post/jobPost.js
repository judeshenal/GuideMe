import React from "react";
import Footer from '../../components/Footer';
import './jobPost.css'
import jobPostImage from '../../Assets/jobPostImage.jpg'
import bookMarks from '../../Assets/bookmarks.svg'
import wso2 from '../../Assets/wso2.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const JobPost = () => {
  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={jobPostImage}  style={{height:'287px',width:'600%'}}/>
    //   <Card.Body>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the  bulk of the card's content.
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    <Container>
      <Row>
        <Col> <img src={jobPostImage} style={{height:'287px',width:'100%'}} ></img></Col>
      </Row>
      <Row  style={{background:"#eaeaea",marginLeft:"0px",marginRight:"0px"}}>    
        <Col><p style={{color:"#02447c",fontWeight:"bold"}}>Browse Job Categories</p></Col>                            
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
            <td><img src={wso2} style={{height:'50px',width:'50px'}} ></img></td>  
            <td style={{maxWidth:"300px",padding:"20px"}}>
            <Row><p  style={{color:"#000000",fontWeight:"bold"}}>WSO2</p></Row>
            <Row><p  style={{color:"#86838"}}>434, Level 4, A-wing, Dynasty Business Park, Andheri Kurla Road, Andheri East, Mumbai, Maharashtra-400059</p></Row>
            <Row><Link to="/company-details"><p  style={{color:"#5559f3",fontWeight:"bold"}}>View more</p></Link></Row>
            </td>
             <td><img src={bookMarks} style={{height:'18px',width:'100px'}} ></img></td>
            {/* // componentend */}

            <td><img src={wso2} style={{height:'50px',width:'50px'}} ></img></td>  
            <td style={{maxWidth:"300px",padding:"20px"}}>
            <Row><p  style={{color:"#000000",fontWeight:"bold"}}>WSO2</p></Row>
            <Row><p  style={{color:"#86838"}}>434, Level 4, A-wing, Dynasty Business Park, Andheri Kurla Road, Andheri East, Mumbai, Maharashtra-400059</p></Row>
            <Row><Link to="/company-details"><p  style={{color:"#5559f3",fontWeight:"bold"}}>View more</p></Link></Row>
            </td>
             <td><img src={bookMarks} style={{height:'18px',width:'100px'}} ></img></td>

             <td><img src={wso2} style={{height:'50px',width:'50px'}} ></img></td>  
            <td style={{maxWidth:"300px",padding:"20px"}}>
            <Row><p  style={{color:"#000000",fontWeight:"bold"}}>WSO2</p></Row>
            <Row><p  style={{color:"#86838"}}>434, Level 4, A-wing, Dynasty Business Park, Andheri Kurla Road, Andheri East, Mumbai, Maharashtra-400059</p></Row>
            <Row><Link to="/company-details"><p  style={{color:"#5559f3",fontWeight:"bold"}}>View more</p></Link></Row>
            </td>
             <td><img src={bookMarks} style={{height:'18px',width:'100px'}} ></img></td>

        </tr>


        <tr>

            {/* // component start */}
            <td><img src={wso2} style={{height:'50px',width:'50px'}} ></img></td>  
            <td style={{maxWidth:"300px",padding:"20px"}}>
            <Row><p  style={{color:"#000000",fontWeight:"bold"}}>WSO2</p></Row>
            <Row><p  style={{color:"#86838"}}>434, Level 4, A-wing, Dynasty Business Park, Andheri Kurla Road, Andheri East, Mumbai, Maharashtra-400059</p></Row>
            <Row><Link to="/company-details"><p  style={{color:"#5559f3",fontWeight:"bold"}}>View more</p></Link></Row>
            </td>
            <td><img src={bookMarks} style={{height:'18px',width:'100px'}} ></img></td>
            {/* // componentend */}

            <td><img src={wso2} style={{height:'50px',width:'50px'}} ></img></td>  
            <td style={{maxWidth:"300px",padding:"20px"}}>
            <Row><p  style={{color:"#000000",fontWeight:"bold"}}>WSO2</p></Row>
            <Row><p  style={{color:"#86838"}}>434, Level 4, A-wing, Dynasty Business Park, Andheri Kurla Road, Andheri East, Mumbai, Maharashtra-400059</p></Row>
            <Row><Link to="/company-details"><p  style={{color:"#5559f3",fontWeight:"bold"}}>View more</p></Link></Row>
            </td>
            <td><img src={bookMarks} style={{height:'18px',width:'100px'}} ></img></td>

            <td><img src={wso2} style={{height:'50px',width:'50px'}} ></img></td>  
            <td style={{maxWidth:"300px",padding:"20px"}}>
            <Row><p  style={{color:"#000000",fontWeight:"bold"}}>WSO2</p></Row>
            <Row><p  style={{color:"#86838"}}>434, Level 4, A-wing, Dynasty Business Park, Andheri Kurla Road, Andheri East, Mumbai, Maharashtra-400059</p></Row>
            <Row><Link to="/company-details"><p  style={{color:"#5559f3",fontWeight:"bold"}}>View more</p></Link></Row>
            </td>
            <td><img src={bookMarks} style={{height:'18px',width:'100px'}} ></img></td>

        </tr>

      </table>
    </Container>
  );
};
  
export default JobPost;