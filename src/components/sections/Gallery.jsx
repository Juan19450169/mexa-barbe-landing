import gallery from "../../data/gallery.js"
import { useState } from "react";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "../../utils/whatsapp.js";
import socialLinks from "../../data/socialLinks.js";

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  return (
    <section id="gallery" className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}

        <div className="text-center">
          <div className="flex items-center justify-center gap-4">

            <div className="w-16 h-[2px] bg-yellow-500"></div>

              <h2 className="text-4xl font-bold text-white">
              Nuestros Trabajos
              </h2>

              <div className="w-16 h-[2px] bg-yellow-500"></div>

              </div>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Descubre algunos de los cortes realizados por nuestro equipo.
          </p>

        </div>

        {/* CARRUSEL */}

        <div className="mt-16">

          <Swiper 
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  }}
          >
            {gallery.map((item)=>(

              <SwiperSlide key={item.id}>

                <img 
                src={item.image}
                alt={item.alt}
                onClick={() =>setSelectedImage(item)}
                  className={`w-full h-52 object-cover rounded-lg cursor-pointer transition duration-300
                  ${
                    selectedImage.id === item.id
                      ? "ring-4 ring-yellow-500 scale-105"
                      : "hover:scale-105"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* TEXTO */}

         <p className="text-center text-gray-500 mt-6">
          Desliza o utiliza las flechas para ver más trabajos.
        </p>

        {/* TARJETA DEL TRABAJO SELECCIONADO */}

        <div className="mt-12 max-w-4xl mx-auto bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">

            <img 
            src={selectedImage.image} 
            alt={selectedImage.alt}
            className="w-full h-[420px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-white">
                {selectedImage.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-8">
                {selectedImage.description}
              </p>

              <button
              onClick={openWhatsApp}
              className="mt-8 flex items-center gap-3
              bg-green-500 hover:bg-green-600
              text-white font-semibold
              px-6 py-3 rounded-lg
              transition duration-300"
            >

              <FaWhatsapp className="text-xl" />

              Reservar este estilo

            </button>

            </div>
        </div>

        {/* BOTON IG */}

        <div className="flex justify-center mt-12">

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3
            border-2 border-yellow-500
            text-yellow-500
            px-8 py-4 rounded-lg
            hover:bg-yellow-500
            hover:text-black
            transition duration-300"
          >

            <FaInstagram className="text-xl" />

            Ver más estilos en Instagram

          </a> 

        </div>

      </div>

    </section>
  )
}

export default Gallery