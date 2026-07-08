import { FaQuoteLeft, FaStar } from "react-icons/fa"

function TestimonialsCard({testimonial}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center
                    transition-all duration-300 hover:-traslate-y-2 hover:shadow-xl">
            {/*COMILLAS*/}

    <FaQuoteLeft className="text-yellow-500text-3xl mx-auto mb-4"/>

            {/*ESTRELLAS*/}

    <div className="flex justify-center gap-1 mb-6">

        {[...Array(testimonial.rating)].map((_, index)=>(
            <FaStar
                key={index}
                className="text-yellow-500 text-sm"
            />
        ))}

    </div>

            {/*COMENTARIO*/}
    
    <p className=" text-gray-700 italic leading-7">

        "{testimonial.comment}"

    </p>

            {/*NOMBRE*/}

    <h3 className="mt-8 font-bold text-xl">

        {testimonial.name}

    </h3>
    </div>
  )
}

export default TestimonialsCard