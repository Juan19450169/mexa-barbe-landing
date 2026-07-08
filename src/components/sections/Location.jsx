import location from "../../data/location.js"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { getBusinessStatus } from "../../utils/businessStatus.js"

function Location() {

  const status = getBusinessStatus(location.schedule);

  return (
    <section id="location" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}

        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="w-6 h-[2px] bg-yellow-500"></div>

            <h2 className="text-4xl font-bold text-black">
              ¿Dónde estamos?
            </h2>

            <div className="w-6 h-[2px] bg-yellow-500"></div>

          </div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Visítanos y disfruta de una experiencia profesional en cada corte.
          </p>

        </div>

        {/*CONTENIDO*/}

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">

          {/*MAPA*/}

          <div>

            <iframe 
            src={location.googleMapsEmbed}
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/*DIRECCION*/}

            <div className="mt-6 flex items-start gap-3">

              <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1" />

              <p>
                {location.address}
              </p>

            </div>

            {/*BOTON*/}

            <a 
            href={location.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 border-2 border-yellow-500
            text-yellow-500 px-8 py-4 rounded-lg font-semibold transition duration-300 
            hover:bg-yellow-500 hover:text-black"
            >

              <FaMapMarkerAlt />

              Cómo llegar.

            </a>


          </div>

          {/*HORARIOS*/}

          <div className="bg-zinc-900 rounded-2xl p-8 shadow-lg">
            <div className="flex-items-center gap-3 mb-8">
              <FaClock className="text-yellow-500 text-2xl" />

              <h3 className="text-2xl font-bold text-white">
                Horarios
              </h3>

            </div>

            <div className="space-y-5">

              {location.schedule.map((item, index)=>(

                <div 
                key={index}
                className="flex justify-between items-center border-b border-zinc-700 pb-4"
                >

                  <span className="text-white font-medium">

                    {item.days.length > 1
                    ? `${item.days[0]} - ${item.days[item.days.length - 1]}`
                    : item.days[0]}

                  </span>

                  <span className="text-yellow-500 font-semibold">
                    {item.hours}
                  </span>

                </div>
              ))}
            </div>

            {/*ESTADO*/}

            <div
  className={`
    mt-8 flex items-center gap-3 rounded-xl p-4 border
    ${
      status.isOpen
        ? "bg-green-500/10 border-green-500"
        : "bg-red-500/10 border-red-500"
    }
  `}
>

  <span
    className={`
      w-3 h-3 rounded-full animate-pulse
      ${
        status.isOpen
          ? "bg-green-500"
          : "bg-red-500"
      }
    `}
  ></span>

  <p
    className={`
      font-medium
      ${
        status.isOpen
          ? "text-green-400"
          : "text-red-400"
      }
    `}
  >
    {status.message}
  </p>

</div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Location