import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./App.css"
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Aboute from "./pages/Aboute"
import Contact from "./pages/Contact"
function App() {
  

  return (
 <div>
<Router>
<Navbar/>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Menü" element={<Menu/>}/>
<Route path="/About" element={<Aboute/>}/>
<Route path="/Contact" element={<Contact/>}/>


</Routes>

<Footer/>
</Router>
 </div>
  )
}

export default App
