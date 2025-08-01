import { Container, Row, Col } from "react-bootstrap"
import "./CustomFooter.css"

function CustomFooter() {
  return (
    <>
      <Container fluid className="footer-custom">
        <Row className="text-center">
          <Col>
            <a className="m-0 text-light" href="">
              Settings
            </a>
          </Col>
          <Col>
            <a className="m-0 text-light" href="">
              Legal Notice
            </a>
          </Col>
          <Col>
            <a className="m-0 text-light" href="">
              Contact Us
            </a>
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
