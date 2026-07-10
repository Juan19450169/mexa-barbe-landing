import desktopCTA from "../../assets/images/CTA.jpeg"
import  movilCTA from "../../assets/images/CTA-movil.jpeg"
import CTA from "../sections/CTA";
import Footer from "./Footer";
function CTAFooter() {

  return (
     <>
      {/* ===================== DESKTOP ===================== */}

      <section
        className="hidden md:block relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${desktopCTA})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />

        <div className="relative z-10">
          <CTA />
          <Footer />
        </div>
      </section>

      {/* ===================== MOBILE ===================== */}

      <section
        className="block md:hidden relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${movilCTA})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />

        <div className="relative z-10">
          <CTA />
          <Footer />
        </div>
      </section>
    </>
  );
}


export default CTAFooter;