import businessInfo from "../data/businessInfo";

export function callBusiness() {
    window.location.href = `tel:${businessInfo.phone}`;
}