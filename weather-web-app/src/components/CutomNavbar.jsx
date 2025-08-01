import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./CustomNavbar.css"

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="text-light d-flex flex-row" href="#home">
          <div className="navbar-logo-container me-3">
            <img
              alt=""
              src="src\assets\img\Weather logo.png"
              width="30"
              height="30"
              className="navbar-logo d-inline-block align-top"
            />
          </div>
          <p className="navbar-name my-auto">Epi Weather</p>
        </Navbar.Brand>

        {/* <div>
          <img src="../public/Weather logo.png" alt="" />
        </div> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              Link
            </Nav.Link>
            <Nav.Link className="text-light" href="#">
              About Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Insert your location"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
