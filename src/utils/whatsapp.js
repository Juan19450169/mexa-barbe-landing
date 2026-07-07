import businessInfo from "../data/businessInfo";

export function openWhatsApp(){
    const message = encodeURIComponent(
        businessInfo.whatsappMessage
    );

    window.open(
        `https://wa.me/${businessInfo.whatsapp}?text=${message}`,
    "_blank"
    )
}