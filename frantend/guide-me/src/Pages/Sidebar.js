import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Done">
        Done
      </a>
      <a className="menu-item" href="/Saved">
        Saved
      </a>
      <a className="menu-item" href="/Inbox">
        Inbox
      </a>
      <a className="menu-item" href="/Assigned">
        Assigned
      </a>
      <a className="menu-item" href="/Participating">
        Participating
      </a>
      <a className="menu-item" href="/Mention">
        Mention
      </a>
      <a className="menu-item" href="/Review Request">
        Review Request
      </a>
    </Menu>
  );
};