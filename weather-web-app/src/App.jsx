import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomNavbar from "./components/CutomNavbar"
import CustomFooter from "./components/CustomFooter"
import HomepageMainRedo from "./components/HomepageMainRedo"
import SingleCityWeather from "./components/SingleCityWeather"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomepageMainRedo />} />
          <Route path="/search" element={<SingleCityWeather />} />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
