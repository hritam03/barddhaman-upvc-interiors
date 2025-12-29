import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/AboutContact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AboutContact from "./components/AboutContact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <AboutContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
