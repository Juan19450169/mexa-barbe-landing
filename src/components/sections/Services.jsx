import { PiScissorsFill } from "react-icons/pi";
import services from "../../data/services.js";

function Services() {
  return (
    <section id="services" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}
        <div className="text-center">

          <div className="flex items-center justify-center gap-4">

            <div className="w-12 md:w-20 h-[2px] bg-yellow-500"></div>

            <PiScissorsFill className="text-yellow-500 text-2xl" />

          <h2 className="text-4xl font-bold text-black">
            Nuestros servicios
          </h2>

          <PiScissorsFill className="text-yellow-500 text-2xl" />

          <div className="w-12 md:w-20 h-[2px] bg-yellow-500"></div>

          </div>
          

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Descubre los servicios que tenemos para ayudarte a lucir tu mejor versión.
          </p>

        </div>

        {/* TARJETAS DE SERVICIOS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.id}
                className="flex flex-col items-center text-center"
              >

                {/* ICONO */}
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">

                  <Icon className="text-yellow-500 text-4xl" />

                </div>

                {/* TITULO */}

                <h3 className="mt-6 text-2xl font-bold text-black">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-4 text-gray-600 leading-7">
                  {service.description}
                </p>

              </div>

            );

          })}

        </div>

        

      </div>

    </section>
  );
}

export default Services;