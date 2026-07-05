import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Services from "./components/sections/Services.jsx";
import WyChooseUs from "./components/sections/WhyChooseUs.jsx";
import Gallery from "./components/sections/Gallery.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Location from "./components/sections/Location.jsx";
import CTA from "./components/sections/CTA.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {


  return (
    <>
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold text-amber-500">
        Tailwind funcionando 🚀
      </h1>
    </div>
      <Navbar />
      <Hero />
      <Services />
      <WyChooseUs />
      <Gallery />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />

    </>
  )
}

export default App
