import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FaList, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function Notification() {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu iconShape="square">
          <MenuItem component={<Link to="/done" />} icon={<FaList />}> Done</MenuItem>
          <MenuItem component={<Link to="/save" />}icon={<FaRegHeart />}> Save</MenuItem>
          <MenuItem component={<Link to="/inbox" />}icon={<FaRegHeart />}> Inbox</MenuItem>
          <MenuItem component={<Link to="/assigned" />}icon={<FaRegHeart />}> Assigned</MenuItem>
          <MenuItem component={<Link to="/participating" />}icon={<FaRegHeart />}> Participating</MenuItem>
          <MenuItem component={<Link to="/mentioned" />}icon={<FaRegHeart />}> Mentioned</MenuItem>
          <MenuItem component={<Link to="/review request" />}icon={<FaRegHeart />}> Review request</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <button onClick={() => collapseSidebar()}>X</button>
      </main> */}

      <Footer/>

    </div>
  )
}
