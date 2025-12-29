import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AboutContact from "./components/AboutContact";
import KeyFeatures from "./components/KeyFeatures";


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
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
