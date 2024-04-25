import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Steam, Microsoft } from "./pages"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            {/* <Header></Header> */}
            <Home></Home>
            <Footer></Footer>
          </>
        } />
        <Route path="/steam" element={
          <>
            <Header></Header>
            <Steam></Steam>
            <Footer></Footer>
          </>
        } />
        <Route path="/microsoft" element={
          <>
            <Header></Header>
            <Microsoft></Microsoft>
            <Footer></Footer>
          </>

        } />
      </Routes>
    </Router>
  )
}

export default App
