import { useEffect, useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/esm/Container"
import { Row, Col } from "react-bootstrap/esm"
import { Link } from "react-router-dom"
import "./HomepageMain.css"

const APICode = "86b71f12d4c8dd28bba393a8a0a8e2e7"
const cities = ["Piacenza", "London", "Tokyo", "New York", "Madrid"]

const HomepageMainRedo = () => {
  const [getWeather, setGetWeather] = useState([])

  useEffect(() => {
    cities.forEach((city) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APICode}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setGetWeather((prevData) => [...prevData, data])
          // console.log(data)
        })
        .catch((err) => {
          console.error(`Error fetching weather`, err)
        })
    })
  }, [])

  return (
    <Container fluid className="carousel-main vh-100">
      <div>
        <Link to="/">
          <h2 className="text-light pt-5">
            Welcome to Epi Weather.com <i className="fas fa-cloud-sun"></i>
          </h2>
        </Link>
      </div>
      <Carousel indicators={false} data-bs-theme="dark" className="pt-5">
        {getWeather.map((data, index) => (
          <Carousel.Item className="px-5" key={index}>
            <Row className="selected-city py-3 mt-5 mb-5">
              <Col className="text-light px-5">
                <h1 className="mb-3">
                  Location: <span>{data.name}</span>
                </h1>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <div>
                    <p>
                      Current Weather:{" "}
                      <span>{data.weather[0].description}</span>
                    </p>
                    <p>
                      Average Temperature: <span>{data.main.temp}</span> °C
                    </p>
                    <p>
                      Feels Like: <span>{data.main.feels_like}</span> °C
                    </p>
                  </div>
                  <div className="d-flex flex-column mt-3 mt-md-0">
                    <p className="me-2">
                      <i className="fas fa-temperature-low"></i> Min Temp:{" "}
                      <span>{data.main.temp_min}</span> °C
                    </p>
                    <p>
                      <i className="fas fa-temperature-high"></i> Max Temp:{" "}
                      <span>{data.main.temp_max}</span> °C
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default HomepageMainRedo
