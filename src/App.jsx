//import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Services from "./components/sections/Services.jsx";
import WyChooseUs from "./components/sections/WhyChooseUs.jsx";
import Gallery from "./components/sections/Gallery.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Location from "./components/sections/Location.jsx";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp.jsx";
import CTAFooter from "./components/layout/CTAFooter.jsx";
import StructuredData from "./components/SEO/StructuredData.jsx";

function App() {


  return (
    <>
      <StructuredData />
    {/*<Navbar />*/}
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <WyChooseUs />
      <Location />
      <CTAFooter />
      <FloatingWhatsApp />
    </>
  )
}

export default App
