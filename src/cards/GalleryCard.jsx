import { useState } from "react";

function GalleryCard({item}) {
    const [activeImage, setActiveImage] = useState(null);
  return (


     <div className="group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() =>
                setActiveImage(
                activeImage === item.id ? null : item.id
                )}
                >

                {/* IMAGEN */}
                <img 
                src={item.image}
                alt={item.alt}
                
                  className= "w-full h-52 object-cover rounded-xl transition-all duration-500 group-hover:scale-100"
                />

                {/* OVERLAY */}

                <div className={`absolute inset-0 bg-gradient-to-t from-black/90
                                via-black/40 to-transparent flex flex-col justify-end p-5
                                transition-all duration-500
                                ${
                                  activeImage === item.id
                                  ? "opacity-100"
                                  : "opacity-0"
                                }
                                group-hover:opacity-100
                                `}
                                >
                                  <div className = {`
                                            transform transition-all duration-500

                                            ${
                                              activeImage === item.id
                                              ? "translate-y-0"
                                              : "translate-y-8"
                                }
                                group-hover:translate-y-0
                                `}
                                >

                                  <h3 className="text-white text-xl font-bold">

                                    {item.title}

                                  </h3>

                                  <p className="text-gray-300 text-sm mt-2 leading-6">

                                    {item.description}

                                  </p>
                                  </div>
                        </div>
                </div>
  )
}

export default GalleryCard