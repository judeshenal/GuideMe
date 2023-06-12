import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
// import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../../components/Footer";
import { FaSearch } from "react-icons/fa";
import "../../Pages/job post/jobsearchbar.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Navbar from "../../components/navbar";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { BiAlignMiddle } from "react-icons/bi";
import jobPostImage from '../../Assets/image.jpg';
import "../job post/jobPost.css";
import logoImg from "../../Assets/logo.jpg";
import { BsClock, BsBag, BsTag, BsShare } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";
// import jobPostImage from '../../Assets/image.jpg'
import webscraping from '../../apis/webscraping';




const JobVacancies = ({ keyword, onChange,idMongo }) => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const BarStyle = { marginLeft: "550px", marginRight: "200px", alignment: "center", width: "20rem", background: "#F0F0F0", border: "none", padding: "0.5rem" };
    const radios = [
        { name: 'Jobs', value: '1' },
        { name: 'Saved', value: '2' },
        { name: 'Alerts', value: '3' },
    ];

    useEffect(()=>{
        webscraping.get('/getmongo/'+idMongo,{
        })
        .then((res) => { 
          console.log("result : ", res.data)
      })
    // Catch errors if any
    .catch((err) => { 
      alert(err)
    })
    },[])

    return (

        <div>
            <Navbar />
            <hr />
            <div>

                <Row style={{ background: "#bfbfbf", marginLeft: "0px", marginRight: "0px" }}>
                    <Col>
                        <br />
                        <div style={{display:'flex', marginLeft:'40%'}}>
                            <FaSearch size={30}/>
                            <input
                                className='search-bar'
                                key="search-bar"
                                value={keyword}
                                placeholder={"Remote Job Vacancies"}
                                onChange={(e) => onChange(e.target.value)}

                            />
                            {/* <FaSearch size={30} style={{marginLeft:'1rem', marginTop:'.5rem'}}/> */}
                        </div>


                    </Col>
                    <br />
                </Row>

                <Row style={{ background: "#bfbfbf", marginLeft: "0px", marginRight: "0px" }}>
                    <Col>
                        <br />
                    </Col>
                    <br />
                </Row>

            </div>
            <Row style={{ background: "#bfbfbf", marginLeft: "0px", marginRight: "0px" }}>

                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                <hr />

            </Row>

            <br />

            <Container>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                {/* <Figure>
                                    <Figure.Image
                                        width={50}
                                        height={70}
                                        alt="50x70"
                                        src="/images/homepageimages/table.png"
                                    />
                                </Figure>               */}
                                <Menu iconShape="square">
                                    <MenuItem component={<Link to="/participating" />} icon={<BiAlignMiddle />}> </MenuItem>
                                </Menu>
                            </th>
                            <th >
                                <>
                                    <Button href="#">Categories Option</Button>{' '}
                                    <Button as="input" type="button" value="Title Option" />{' '}

                                    <Button as="input" type="button" value="Data Posted Option" />{' '}
                                    <Button as="input" type="button" value="Type Option" />{' '}
                                    <Button as="input" type="submit" value="Comany Type Option" />{' '}
                                    <Button as="input" type="reset" value="Employer Option" />
                                </>
                                {/* 
                                <Row style={{ background: "#eaeaea", marginLeft: "100px", marginRight: "20px" }}>


                                    <Col><p style={{ color: "#02447c", fontWeight: "bold", }}>
                                        <span className='write'>
                                            <Link className="link" to="/write">Category</Link>
                                        </span>
                                    </p></Col>

                                    <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
                                        <span className='write'>
                                            <Link className="link" to="/write">Title</Link>
                                        </span>
                                    </p></Col>

                                    <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
                                        <span className='write'>
                                            <Link className="link" to="/write">Data Posted</Link>
                                        </span>
                                    </p></Col>

                                    <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
                                        <span className='write'>
                                            <Link className="link" to="/write">Type</Link>
                                        </span>
                                    </p></Col>

                                    <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
                                        <span className='write'>
                                            <Link className="link" to="/write">Company Type</Link>
                                        </span>
                                    </p></Col>

                                    <Col><p style={{ color: "#02447c", fontWeight: "bold" }}>
                                        <span className='write'>
                                            <Link className="link" to="/write">Employer</Link>
                                        </span>
                                    </p></Col>



                                </Row> */}

                            </th>


                        </tr>

                    </thead></Table>



                <br />

                <>
                    <Button variant="primary" size="lg" active>
                        ALL
                    </Button>{' '}
                    <Button variant="secondary" size="lg" active>
                        IT
                    </Button>{' '}
                    <Button variant="secondary" size="lg" active>
                        Education
                    </Button>{' '}

                    <Button variant="secondary" size="lg" active>
                        Chef
                    </Button>{' '}

                    <Button variant="secondary" size="lg" active>
                        Engineering
                    </Button>{' '}

                    <Button variant="secondary" size="lg" active>
                        Fashion & Drsign
                    </Button>{' '}

                    <Button variant="secondary" size="lg" active>
                        Marketing
                    </Button>{' '}

                    <Button variant="secondary" size="lg" active>
                        Marketing
                    </Button>{' '}
                    {/* <Button variant="secondary" size="lg" active>
                        Marketing
                    </Button>{' '} */}
                        <MdDoubleArrow size={40}/>
                  
                   



                </>

                <br />
                <br />

                {/* <h3>Business Analyst</h3>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th><Form.Label htmlFor="exampleColorInput">Introducrion</Form.Label>
                                <Form.Control
                                    type="color"
                                    id="exampleColorInput"
                                    defaultValue="#563d7c"
                                    title="Choose your Theme"


                                />
                                <br />
                                <Form.Control type="file" size="sm" />
                            </th>
                            <th>
                                Deep Consulting solutions<br />Hi Erandi<td>Mark</td>
                                <Form.Group controlId="formFileSm" className="mb-3">

                                </Form.Group>
                            </th>


                        </tr>

                    </thead></Table> */}


                    {/* Job role detail content */}
                    <div className="job-role-detail-content">
                        <div className="job-role-detail">
                            <img className="job-role-detail-logo" src={logoImg}/>
                            <div className="job-role-detail-text">
                                <h4 style={{paddingLeft:'2rem'}}>Business Analyst</h4>
                                <ul className='job-role-detail-text-list'>
                                    <li>Deep Consulting Solutions</li>
                                    <li>Via2Staff</li>
                                    <li>US $60 - $85K</li>
                                    <li className='job-role-detail-text-list-bottom-tab'>
                                        <div><BsClock/> 2 Days Ago</div>
                                        <div style={{marginLeft:'1rem'}}> <BsBag/> Full Time</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="job-role-icon-set">
                           <div><BsTag size={20}/>SAVE</div> 
                            <BsShare size={20}/>
                        </div>
                    </div>



                <hr />

                <div>
                <a href="https://extrogene.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" active>
                        Apply on LinkedIn
                    </Button>{' '} </a>
                </div>

                <hr />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                            <Card style={{ background: "#eaeaea", marginLeft: "0px", marginRight: "0px" }}>
                    <Card.Body >
                        {/* // <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                            We are looking for,<br />

                            SOFTWARE ENGINEER / ASSOCIATE CONSULTANT - Pega Systems<br />


                            EVONSYS (www.evonsys.com) headquartered in Delaware, USA, we have centers in Netherlands, Australia, Canada, India, and Sri Lanka. A leading Technology Partner for Pega Systems. Our solutions help companies in banking, insurance, government, healthcare and beyond to scale their platforms and take their applications to the next level. In our rapid growth, we invite dynamic Sri Lankan professionals to join our Sri Lanka Center.
                            <br />

                            We’re looking for …<br />

                            * Bachelors’ Degree in Computer Science / Engineering<br />
                            * 1.5+ Years min experience in PEGA Technology<br />
                            * Knowledge in PEGA Frameworks / PEGA RPA is an added advantage<br />
                            * Right attitude and Good Communication Skill<br />
                            * Ready Learn and accept challenges<br />
                            * Be a Team Player and ready to work as a TEAM<br />

                            You will be rewarded with…<br />

                            * Opportunity to Grow and be a part of EvonSys Family<br />
                            * Guided carried development in PEGA Technology (www.pega.com)<br />
                            * Friendly and flexible working Environment<br />
                            * Technically Challenging work Culture<br />
                            * Drive and Support for Innovation<br />

                            Claim what you deserve! An attractive package along with USD pegged allowance awaits for the suitable candidates with many more benefits on the offering.

                            <br />
                            EvonSys thrives on a work culture that is built upon human values, which is the core of our success. Do apply and be part of a dynamic team.<br />
                        </Card.Text>

                    </Card.Body>
                </Card>
                            </th>
                            <th> <Row style={{margin: '0px 0 0 0'}}>
        <Col style={{ width: '100%', height: '680px', overflow: 'hidden' }}> <img src={jobPostImage} style={{width: '100%'}}  ></img></Col>
        <Col style={{position: 'absolute', margin: '220px 0 0 50px', width:'80%'}}><h1 style={{ color: 'white' }}>What Jobs Are You <br/>Looking <br/>Foryour job Opertunities?</h1></Col>
      </Row>
                            </th>


                        </tr>

                    </thead></Table>



                <hr />
            </Container>


            <Footer />
        </div>




    );
};

export default JobVacancies;