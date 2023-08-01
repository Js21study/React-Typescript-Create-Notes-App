import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BiArchive } from 'react-icons/bi';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="logo" to="/">
          Create Notes App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="p-2" to="/">
              <BiHomeAlt2 /> Home
            </Link>

            <Link className="p-2" to="/archive">
              <BiArchive /> Archive
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
