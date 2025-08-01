import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./CustomNavbar.css"
import { useState } from "react"
import { useLocation, Link } from "react-router-dom"

const endPoint = "https://api.openweathermap.org/data/2.5/weather?q="
const APICode = "86b71f12d4c8dd28bba393a8a0a8e2e7"

function CustomNavbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const location = useLocation()

  const getWeather = () => {
    fetch(endPoint + searchQuery + "&appid=" + APICode + "&units=metric")
      .then((res) => {
        console.log(res)

        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error has occurred during retrieving info")
        }
      })
      .then((data) => {
        console.log(data.name)
        console.log(data.weather[0].description)
        console.log(data.main.temp)
        console.log(data.main.feels_like)
        console.log(data.main.temp_min)
        console.log(data.main.temp_max)
      })
      .catch((err) => {
        console.error("Fetch error:", err)
      })
  }

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
          <p className="navbar-name my-auto me-4">Epi Weather</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              className={
                "text-light fw-bold text-decoration-none" +
                (location.pathname === "/" ? "active" : "")
              }
              to="/"
            >
              <p className="me-4 my-0">Home</p>
            </Link>
            <Link
              className={
                "text-light fw-bold text-decoration-none" +
                (location.pathname === "/link" ? "active" : "")
              }
              to="/link"
            >
              <p className="me-4 my-0">Link</p>
            </Link>
            <Link
              className={
                "text-light fw-bold text-decoration-none" +
                (location.pathname === "/about-us" ? "active" : "")
              }
              to="/about-us"
            >
              <p className="me-4 my-0">About Us</p>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              id="search-Weather"
              type="search"
              placeholder="Insert your location"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
              }}
            />
            <Button variant="outline-info" onClick={getWeather}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
