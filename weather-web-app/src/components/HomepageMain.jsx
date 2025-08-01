import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/esm/Container"
import { Row, Col } from "react-bootstrap/esm"
import { useState } from "react"
import "./HomepageMain.css"

const endPoint = "https://api.openweathermap.org/data/2.5/weather?q="

const HomepageMain = () => {
  // const [city, setCity] = useState("")
  // const [country, setCountry] = useState("IT")
  // const APICode = "86b71f12d4c8dd28bba393a8a0a8e2e7"

  // const PiacenzaAPI =
  //   "https://api.openweathermap.org/data/2.5/weather?q=Piacenza,IT&appid=86b71f12d4c8dd28bba393a8a0a8e2e7"

  //   const MilanoAPI = "https://api.openweathermap.org/data/2.5/weather?q=Milano,IT&appid=86b71f12d4c8dd28bba393a8a0a8e2e7"

  // const [weatherData, setWeatherData] = useState()

  // const getWeather = () => {
  //   fetch(endPoint + city + "," + country + "&appid=" + APICode)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json()
  //       } else {
  //         throw new Error("Error has occurred during retrieving info")
  //       }
  //     })
  //     .then((data) => {
  //       setWeatherData({})
  //       // console.log(data.name)
  //       // console.log(data.weather[0].description)
  //       // console.log(data.main.temp)
  //       // console.log(data.main.feels_like)
  //       // console.log(data.main.temp_min)
  //       // console.log(data.main.temp_max)
  //     })
  //     .catch((err) => {
  //       console.error("Fetch error:", err)
  //     })
  // }

  // getWeather()

  const APICode = "86b71f12d4c8dd28bba393a8a0a8e2e7"
  const [carouselCities, setCarouselCities] = useState()

  const carouselCity = () => {
    Promise.all([
      fetch(endPoint + "Piacenza,IT&appid=" + APICode).then((res) =>
        res.json()
      ),
      fetch(endPoint + "Milano,IT&appid=" + APICode).then((res) => res.json()),
      fetch(endPoint + "Tokyo,JP&appid=" + APICode).then((res) => res.json()),
    ])
      .then(([piacenzaData, milanoData, tokyoData]) => {
        setCarouselCities([piacenzaData, milanoData, tokyoData])
        console.log(milanoData)
      })
      .catch((err) => {
        console.error("Fetch error:", err)
      })
  }

  carouselCity()
  console.log(carouselCities)

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

export default HomepageMain
