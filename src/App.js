import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <About />
      <Portfolio/>
      <Resume/>
      <Contact/>
      <Footer/>




      {/* blur divs */}
      {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blur"
        style={{
          background: "#c1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem",
        }}
      ></div> */}
    </div>
  );
}

export default App;
