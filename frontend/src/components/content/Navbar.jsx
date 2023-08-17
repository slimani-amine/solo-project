import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState;
  const searchproject = (term) => {
    if (!term) {
      settrigger(!trigger);
    }
    setdata(
      data.filter((e, i) => {
        return e.name.toUpperCase().includes(term.toUpperCase());
      })
    );
  };
  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <input
          type="text"
          onChange={(e) => {
            const newTerm = e.target.value;
            setSearchTerm(newTerm);
            searchproject(newTerm);
          }}
        />
        <button
          onClick={() => {
            searchproject(searchTerm);
          }}
        >
          search
        </button>
        <Nav className="ml-auto" navbar>
          <Nav.Link
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
