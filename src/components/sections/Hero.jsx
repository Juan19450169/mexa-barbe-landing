import businessInfo from "../../data/businessInfo"
import heroImage from "../../assets/images/fade_alto_desktop.jpeg"
import logo from "../../assets/images/mexa_barber_shop.png"
import { FaWhatsapp, FaPhoneAlt, FaStar} from "react-icons/fa";


function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(businessInfo.whatsappMessage);
    window.open(`https://wa.me/${businessInfo.whatsapp}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  }
  return (
     <section
      id="hero"
      className="relative min-h-screen bg-cover bg-[70%] md:bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay para oscurecer la imagen */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center px-6">

        <div className="max-w-xl flex flex-col items-start">

          {/* Nombre */}
          
          <img 
          src={logo}
           alt="Mexa Barber Shop"
           className="w-48 md:w-60 object-contain"
            />

            <div className="flex gap-1 mt-3">

  {[...Array(5)].map((_, index) => (
    <FaStar
      key={index}
      className="text-yellow-500 text-lg "
    />
  ))}

</div>

<p className="text-gray-300 text-sm mt-2">
  +{businessInfo.hero.satisfiedClients} clientes satisfechos
</p>
      

          {/* Título */}
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-white">
            {businessInfo.hero.title}
            <br />
            <span className="text-yellow-500">
              {businessInfo.hero.highlight}
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-6 max-w-lg text-lg text-gray-200 leading-8">
            {businessInfo.hero.decription}
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-col gap-4 w-fit">

            <button
            onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600
               text-white font-semibold px-8 py-4 rounded-lg 
               transition duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Reservar por WhatsApp
            </button>

            <button
              onClick={handleCall}
              className="border-2 border-yellow-500 text-yellow-500
               hover:bg-yellow-500 hover:text-black font-semibold
                px-8 py-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
            >
              <FaPhoneAlt className="text-lg" />
              Llamar ahora
            </button>


          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3">

      
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

               <p className="text-white text-sm font-medium">
                   {businessInfo.hero.responseTime}
  </p>

</div>

        </div>

      </div>
    </section>
  )
}

export default Hero