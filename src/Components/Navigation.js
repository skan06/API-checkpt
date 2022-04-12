import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>
         <Navbar bg="danger" variant="dark">
    <Container>
    <Navbar.Brand >VIP Contacts</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="UserList">Contacts List</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigation