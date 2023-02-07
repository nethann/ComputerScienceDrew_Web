import React from 'react';


//components 
import Home from './Components/Home/Home';
import CourceExpectation from './Components/Cource-expectation/CourceExpectation';
import Contact from './Components/Contact/Contact';
import APComp from "./Components/Cources/AP-Computer/APComp";
import WebDevelopment from './Components/Cources/Web-Development/WebDevelopment';

//the developer login landing page
import DeveloperLogin from './Components/DeveloperLogin/DeveloperLogin';

//developer BACKEND
import PrivateRoute from './PrivateRoute';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


//routing
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { Link } from 'react-router-dom';

// global CSS
import "./Components/Global/Global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/Global/Nav.css";

//ICONS
import { IoIosHammer } from 'react-icons/io';


import Developer from './Components/Developer/Developer';


function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <>
          <Navbar collapseOnSelect bg="background" expand="lg" variant='dark'>
            <Container>
              <Navbar.Brand as={Link} to="/">Drew Charter School</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/developerLogin">Developer <IoIosHammer /> </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/contributors">Contributors </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav >
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/courceExpectations">Cource Expectations</Nav.Link>

                  <NavDropdown title="Cources" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/APComputerScience">AP Computer Science</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/WebDevelopment">Web Development</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/BusinessComputerScience">Business/ Computer Science</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courceExpectations" element={<CourceExpectation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/developerLogin" element={<DeveloperLogin />} />

            {/* Private Route */}
            <Route element={<PrivateRoute/>}>
              <Route path="/developer" element={<Developer />} />
            </Route>


            {/* Cources */}
            <Route path="/APComputerScience" element={<APComp />} />
            <Route path="/WebDevelopment" element={<WebDevelopment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}
export default App;
