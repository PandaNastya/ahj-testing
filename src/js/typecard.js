export function typeCard(cardNumber) {
    const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const masterCard = /^5[1-5][0-9]{14}$/;
    const amex = /^3[47][0-9]{13}$/;
    const mir = /^220[0-4][0-9]{12}$/;

    if (visa.test(cardNumber)) {
        return "Visa";
    } else if (masterCard.test(cardNumber)) {
        return "MasterCard";
    } else if (amex.test(cardNumber)) {
        return "American Express";
    } else if (mir.test(cardNumber)) {
        return "Mir";
    } else {
        return "Unknown card";
    }
}