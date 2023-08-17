import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function SideBar() {

  return (
    <div>
      <div className="sidebar-header">
        <h3>projects platform</h3>
      </div>
      <Nav className="flex-column pt-2">
        <Link to="/allprojects">
          <Nav.Item className="active">
            <Nav.Link>All Project</Nav.Link>
          </Nav.Item>
        </Link>
        <Link to="/myprojects">
          <Nav.Item>
            <Nav.Link>My projects</Nav.Link>
          </Nav.Item>
        </Link>
      </Nav>
    </div>
  );
}

export default SideBar;
