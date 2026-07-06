import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import businessInfo from "../../data/businessInfo";
import navigation from "../../data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <nav className="max-w-7x1 mx-auto flex items-center justify-between px-6 py-4">

        {/*Logo*/}
        <h1 className="text-2xl font-bold">
          {businessInfo.name}
        </h1>

         {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item)=>(
            <li key={item.id}>
              <a 
              href={item.href}
              className="hover:text-yellow-400 transition"
              >{item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón WhatsApp Desktop */}

        <a href={`https://wa.me/${businessInfo.whatsapp}`}
        className="hidden md:flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-00 transition"
        >
          <FaWhatsapp />
          Reservar
        </a>

        {/* Botón menú móvil */}

        <button 
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>
      
      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">

          <ul className="flex flex-col p-6 gap-4">

            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <a
              href={`https://wa.me/${businessInfo.whatsapp}`}
              className="flex items-center justify-center gap-2 bg-green-600 py-3 rounded-lg"
            >
              <FaWhatsapp />
              Reservar por WhatsApp
            </a>

          </ul>

        </div>
      )}
    </header>
  )
}


export default Navbar