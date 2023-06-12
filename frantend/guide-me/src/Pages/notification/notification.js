import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { AiFillCopy, AiFillMessage, AiFillProfile, AiFillContacts, AiFillRead, AiFillMedicineBox } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Navbar from "../../components/navbar";
import Table from 'react-bootstrap/Table';
import jobPostImage from '../../Assets/image.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiExpand } from "react-icons/bi";

export default function Notification() {
  const { collapseSidebar } = useProSidebar();
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
                  <MenuItem component={<Link to="/assigned" />} icon={<AiFillContacts />}> Assigned</MenuItem>
                  <MenuItem component={<Link to="/participating" />} icon={<BsFillPersonLinesFill />}> Participating</MenuItem>
                  <MenuItem component={<Link to="/reviewrequest" />} icon={<AiFillMedicineBox />}> Review request</MenuItem>
                  <MenuItem component={<Link to="/assigned" />} style={{visibility:'hidden'}}> </MenuItem> 
                </Menu>

              </Sidebar>

              <main>
                <BiExpand size={30} onClick={() => collapseSidebar()} style={{float:'right', cursor:'pointer'}}/>
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
