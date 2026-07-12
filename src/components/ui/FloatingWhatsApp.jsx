import { useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

import { openWhatsApp } from "../../utils/whatsapp";

function FloatingWhatsApp() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const hero = document.getElementById("hero");


        const handleScroll = () => {

            if (!hero) return;

            const heroBottom = hero.offsetHeight;

            setShowButton(window.scrollY > heroBottom);

        };

       window.addEventListener("scroll", handleScroll);

        // Ejecuta una vez al cargar por si la página inicia desplazada
        handleScroll();

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    return (

        <button
            aria-label="Agendar cita por WhatsApp"
            onClick={openWhatsApp}

            className={`fixed bottom-6 right-6 z-50 bg-yellow-500 hover:bg-yellow-500
                        p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110
                        
                ${
                    showButton
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }
            `}

        >

            <FaWhatsapp className="text-white text-4xl"/>

        </button>

    );

}

export default FloatingWhatsApp;