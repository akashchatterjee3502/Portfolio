import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
