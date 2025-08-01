import { Container, Row, Col } from "react-bootstrap"
import "./CustomFooter.css"

function CustomFooter() {
  return (
    <>
      <Container fluid className="footer-custom">
        <Row className="text-center">
          <Col>
            <p className="m-0 text-light">Link1</p>
          </Col>
          <Col>
            <p className="m-0 text-light">Link2</p>
          </Col>
          <Col>
            <p className="m-0 text-light">Link3</p>
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
