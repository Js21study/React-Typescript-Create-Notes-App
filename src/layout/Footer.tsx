import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mt-5">
      <div className="text-center text-secondary mx-auto p-2">© All rights reserved</div>
    </Navbar>
  );
};
export default Footer;
