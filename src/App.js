import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Social_links from "./components/Social_links";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div> 
       <Navbar />
       <Home />
       <Social_links />
       <About />
       <Portfolio />
       <Experience />
       <Contact />
       <ParticlesComponent />
      
       
    </div>
 
  );
}

export default App;