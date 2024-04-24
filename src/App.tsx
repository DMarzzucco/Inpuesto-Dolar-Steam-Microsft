import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </>
        } />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  )
}

export default App
