import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        {/* <Link to="/">
        <button>All</button>
        </Link>
          
          <Nav className="me-auto">
          <Link to="/javascript">
        <button>Javascript</button>
        </Link>
        <Link to="/mixes">
        <button>Mixes</button>
        </Link>
        <Link to="/music">
        <button>Music</button>
        </Link> */}
        
        {/* yhi kam hm link ki jgh react router dom k NavLink lga k bhki kr skte h jese niche kiya h
        bs dono me frk ye h ki NavLink hme active class provide krta h jisse hm active class ka color change kr skte h
        mtlb css de skte h yha app.css me .active button (class) pr color dege to jis page pr rendor hoga usi ka color dikhega
        Link hme active class provide nhi kr skta h pr usme nhi hm css de skte h  */}
    {/* ----------------------------------------------------------------- */}
        <NavLink to="/">
        <button>All</button>
        </NavLink>
          
          <Nav className="me-auto">
          <NavLink to="/javascript">
        <button>Javascript</button>
        </NavLink>
        <NavLink to="/mixes">
        <button>Mixes</button>
        </NavLink>
        <NavLink to="/music">
        <button>Music</button>
        </NavLink>
          </Nav>
        </Container>
      </Navbar>
    
    </div>
  )
}

export default Header