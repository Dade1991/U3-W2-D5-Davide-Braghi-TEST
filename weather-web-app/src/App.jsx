import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomNavbar from "./components/CutomNavbar"
import CustomFooter from "./components/CustomFooter"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes></Routes>
        <CustomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
