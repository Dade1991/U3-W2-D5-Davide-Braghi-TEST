import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function SingleCityWeather() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Location: <span></span>
        </Card.Title>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <p>
              Current Weather: <span></span>
            </p>
            <p>
              Average Temperature: <span></span> °C
            </p>
            <p>
              Feels Like: <span></span> °C
            </p>
          </div>
          <div className="d-flex flex-column mt-3 mt-md-0">
            <p className="me-2">
              <i className="fas fa-temperature-low"></i> Min Temp: <span></span>{" "}
              °C
            </p>
            <p>
              <i className="fas fa-temperature-high"></i> Max Temp:{" "}
              <span></span> °C
            </p>
          </div>
        </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleCityWeather
