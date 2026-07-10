import footer from "../../data/footer";
import location from "../../data/location";
import socialLinks from "../../data/socialLinks";

import logo from "../../assets/images/mexa_barber_shop.png";
import {

    FaInstagram,
    FaFacebook,
    FaTiktok,
    FaMapMarkerAlt,
    FaPhoneAlt

} from "react-icons/fa";
function Footer() {

    return (

        <footer
            className="pt-20 pb-10">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div
                    className="grid md:grid-cols-3 gap-12 items-start">

                    {/* LOGO */}

                    <div className="text-center md:text-left">

                        <img

                            src={logo}

                            alt="Mexa Barber Shop"

                            className="h-20 mx-auto md:mx-0"

                        />

                        <p className="mt-5 text-gray-400 leading-7">

                            {footer.description}

                        </p>

                    </div>

                    {/* CONTACTO */}

                    <div>

                        <h3 className="text-white text-xl font-semibold">

                            Contacto

                        </h3>

                        <div className="mt-6 space-y-5">

                            <div className="flex gap-3">

                                <FaMapMarkerAlt className="text-yellow-500 mt-1" />

                                <p className="text-gray-300">

                                    {location.address}

                                </p>

                            </div>

                            <div className="flex gap-3">

                                <FaPhoneAlt className="text-yellow-500 mt-1" />

                                <p className="text-gray-300">

                                    (492) 493-5073

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* REDES */}

                    <div>

                        <h3 className="text-white text-xl font-semibold">

                            Síguenos

                        </h3>

                        <div className="flex gap-6 mt-6">

                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <FaInstagram
                                    className="text-yellow-500 text-3xl hover:text-white
                                        transition
                                    "
                                />

                            </a>

                            <a
                                href={socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <FaFacebook
                                    className="text-yellow-500 text-3xl hover:text-white
                                                transition" />

                            </a>

                            <a
                                href={socialLinks.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <FaTiktok
                                    className="text-yellow-500 text-3xl hover:text-white
                                        transition"/>

                            </a>

                        </div>

                    </div>

                </div>

                <div
                    className="border-t border-white/10 mt-12 pt-8
                        text-center">

                    <p className="text-gray-500">

                        {footer.copyright}

                    </p>

                    <p className="text-gray-600 text-sm mt-2">

                        Desarrollado por Luis Estrada

                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;