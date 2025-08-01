import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/esm/Container"
import { Row, Col } from "react-bootstrap/esm"
import { useState } from "react"
import "./HomepageMain.css"

const endPoint = "https://api.openweathermap.org/data/2.5/weather?q="

const HomepageMainRedo = () => {
  const [getWeather, setGetWeather] = useState([])

  return (
    <Container fluid className="carousel-main vh-100">
      <div>
        <h2 className="text-dark pt-5">Welcome to Epi Weather.com</h2>
      </div>
      <Carousel indicators={false} data-bs-theme="dark" className="pt-5">
        <Carousel.Item>
          <Row>
            <Col>
              <div className="my-2">
                {/* <h1>Location: {carouselCities[0].name}</h1> */}
              </div>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <p>Current Weather: </p>
                  <p>Current Avarage Temperature: </p>
                  <p>Feels like Temperature: </p>
                </div>
                <div className="d-flex flex-row">
                  <p className="me-2">Minimum Temperature: </p>
                  <p>Max Temperature: </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col></Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col></Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default HomepageMainRedo
