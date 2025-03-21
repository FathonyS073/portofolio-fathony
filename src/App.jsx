import About from "./Components/Fragments/About";
import Contact from "./Components/Fragments/Contact";
import Experience from "./Components/Fragments/Experience";
import Footer from "./Components/Fragments/Footer";
import Hero from "./Components/Fragments/Hero";
import Navbar from "./Components/Fragments/Navbar";
import Project from "./Components/Fragments/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
