import whyChooseUs from "../../data/whyChooseUs";

// Card
import WhyChooseUsCard from "../../cards/WhyChooseUsCard";

function WhyChooseUs() {
  return (
    <section id="whyChooseUs" className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}

        <div className="text-center">

          <div className="flex items-center justify-center gap-4">

            <div className="w-16 h-[2px] bg-yellow-500"></div>

            <h2 className="text-4xl font-bold text-white">
              ¿Por qué elegirnos?
            </h2>

            <div className="w-16 h-[2px] bg-yellow-500"></div>

          </div>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Nos esforzamos por brindar una experiencia de calidad en cada visita.
          </p>

        </div>

        {/* CARDS */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {whyChooseUs.map((item) => (

            <WhyChooseUsCard
              key={item.id}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs