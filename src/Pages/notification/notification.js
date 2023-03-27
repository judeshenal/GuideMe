import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FaList, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { AiFillCopy, AiFillMessage, AiFillProfile, AiFillContacts, AiFillRead, AiFillMedicineBox } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Container } from 'react-bootstrap';
import Navbar from "../../components/navbar";
import { HomePageData } from "../../data/homepagedata";
import HomePageCard from "../../components/homepagecard";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import jobPostImage from '../../Assets/image.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Notification() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  return (

    <div >
      <Navbar />
      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div style={{ display: 'flex', height: '120%' }}></div>

              <Sidebar>
                <Menu iconShape="square">
                  <MenuItem component={<Link to="/done" />} icon={<AiFillProfile />}> Done</MenuItem>
                  <MenuItem component={<Link to="/save" />} icon={<AiFillCopy />}> Save</MenuItem>
                  <MenuItem component={<Link to="/inbox" />} icon={<AiFillMessage />}> Inbox</MenuItem>
                  <MenuItem component={<Link to="/assigned" />} icon={<AiFillContacts />}> Assigned</MenuItem>
                  <MenuItem component={<Link to="/participating" />} icon={<BsFillPersonLinesFill />}> Participating</MenuItem>
                  <MenuItem component={<Link to="/mentioned" />} icon={<AiFillRead />}> Mentioned</MenuItem>
                  <MenuItem component={<Link to="/review request" />} icon={<AiFillMedicineBox />}> Review request</MenuItem>
                </Menu>

              </Sidebar>

              <main>
                <button onClick={() => collapseSidebar()}></button>
              </main>

            </th>
            <th>
              <div style={{ display: 'flex', height: '100%' }}></div>
              <Row style={{ margin: '0px 0 0 0' }}>
                <Col style={{ width: '100%', height: '380px', overflow: 'hidden' }}> <img src={jobPostImage} style={{ width: '100%' }}  ></img></Col>
                <Col style={{ position: 'absolute', margin: '120px 0 0 50px', width: '80%' }}><h1 style={{ color: 'white' }}>What Jobs Are You Looking <br />For When You Migrate?</h1></Col>
              </Row>
            </th>


          </tr>

        </thead></Table>



      <Footer />
    </div>

  )
}
