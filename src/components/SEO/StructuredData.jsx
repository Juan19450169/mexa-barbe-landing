import businessInfo from "../../data/businessInfo"
import location from "../../data/location"
import socialLinks from "../../data/socialLinks"
import { buildOpeningHours } from "../../utils/schemaHelper.js";

function StructuredData() {

    const schema = {

        "@context": "https://schema.org",
        "@type": "HairSalon",
        "@id": "https://mexa-barbe-landing.vercel.app/#organization",

        name: businessInfo.name,

        description: businessInfo.hero.decription,

        image: "https://mexa-barbe-landing.vercel.app/og-image.jpeg",

        logo: "https://mexa-barbe-landing.vercel.app/favicon.png",

        telephone: `+${businessInfo.whatsapp}`,

        priceRange: businessInfo.priceRange,

        currenciesAccepted: businessInfo.currenciesAccepted,

        paymentAccepted: businessInfo.paymentAccepted,
        
        address: {

            "@type": "PostalAddress",
            streetAddress: location.address,
            addressCountry: location.country,
        },

        geo: {

            "@type": "GeoCoordinates",
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
        },

        areaServed: {

            "@type": "City",

            name: "Zacatecas"

        },

        hasMap: location.googleMapsLink,

        sameAs: Object.values(socialLinks).filter(Boolean),

        openingHoursSpecification:
            buildOpeningHours(location.schedule),

    }
  return (
    <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
    }}
    />
  )
}

export default StructuredData