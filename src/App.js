import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <About />



      {/* blur divs */}
      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blur"
        style={{
          background: "#c1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem",
        }}
      ></div>
    </div>
  );
}

export default App;
