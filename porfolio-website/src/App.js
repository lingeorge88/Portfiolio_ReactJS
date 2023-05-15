import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="text-4xl font-bold font-signature">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
