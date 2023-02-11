import Community from "./Community"
import Footer from "./Footer"
function App() {

  function Navbar(){
    return(
     <nav>
        <img src="./src/logo2.png" alt='logo' className="huddle-logo" />
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
