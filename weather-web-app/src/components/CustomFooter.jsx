import { Container, Row, Col } from "react-bootstrap"
import "./CustomFooter.css"
import { Link } from "react-router-dom"

function CustomFooter() {
  return (
    <>
      <Container fluid className="footer-custom">
        <Row className="text-center pt-3">
          <Col>
            <Link className="m-0 text-light" to="">
              Settings
            </Link>
          </Col>
          <Col>
            <Link className="m-0 text-light" to="">
              Legal Notice
            </Link>
          </Col>
          <Col>
            <Link className="m-0 text-light" to="">
              Contact Us
            </Link>
          </Col>
        </Row>
        <hr className="mx-auto" />
        <Row className="text-center my-3">
          <Col>
            <p className="m-0 pb-4 text-light fst-italic">
              All rights reserved to EpiWeather&#169; -{" "}
              {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CustomFooter
