
import testimonials from "../../data/testimonials.js"

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//Card
import TestimonialsCard from "../../cards/TestimonialsCard.jsx";

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/*ENCABEZADO*/}

        <div className="text-center">

          <div className="flex items-center justify-center gap-4">

            <div className="w-16 h-[2px] bg-yellow-500"></div>

            <h2 className="text-4xl font-bold text-black">
              Lo que dicen nuestros clientes
            </h2>

            <div className="w-16 h-[2px] bg-yellow-500"></div>

          </div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es la mejor carta de presentación.
          </p>

        </div>

         {/* CARRUSEL */}

        <div className="mt-16">

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >

            {testimonials.map((testimonial) => (

              <SwiperSlide key={testimonial.id}>

                <TestimonialsCard testimonial={testimonial} />

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  )
}

export default Testimonials