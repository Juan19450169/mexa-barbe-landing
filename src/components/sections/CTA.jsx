import cta from "../../data/cta.js";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "../../utils/whatsapp.js";

  function CTA() {

  return (

    <section id="cta" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            {cta.title}

          </h2>

          <p className="mt-6 text-lg text-gray-300">

            {cta.subtitle}

          </p>

          <button

            onClick={openWhatsApp}

            className="mt-10 inline-flex items-center gap-3 bg-green-500
              hover:bg-green-600 px-10 py-4 rounded-xl text-white font-semibold
                transition-all duration-300 hover:scale-105">

            <FaWhatsapp className="text-2xl" />

            {cta.buttonText}

          </button>

        </div>

      </div>

    </section>

  );

}

export default CTA;