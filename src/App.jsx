import Community from "./Community"
import Footer from "./Footer"
import {logo2} from "./images"
function App() {

  function Navbar(){
    return(
     <nav>
        <img src={logo2} alt='logo' className="huddle-logo" />
        <span>Try it Free</span>
     </nav>
    )
  }
  return (
    <div className="container">
      <Navbar />
      <Community />
      <Footer />
    </div>
  )
}

export default App
