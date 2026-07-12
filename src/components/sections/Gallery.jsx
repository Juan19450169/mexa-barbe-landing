import gallery from "../../data/gallery.js"

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaInstagram } from "react-icons/fa";

import socialLinks from "../../data/socialLinks.js";

import GalleryCard from "../../cards/GalleryCard.jsx";

function Gallery() {


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

                <GalleryCard item={item} />

              </SwiperSlide>
            ))}
          </Swiper>

        </div>        

        {/* BOTON IG */}

        <div className="flex justify-center mt-12">

          <a
            href={socialLinks.instagram}
            aria-label="Instagram de Mexa Barber Shop"
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