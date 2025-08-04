export function validateCard(cardNumber) {

    let sum = 0;
    let double = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let num = parseInt(cardNumber.charAt(i));
        if (double) {
        num *= 2;
        if (num > 9) {
            num -= 9;
        }
        }
        sum += num;
        double = !double;
    }
    return sum % 10 === 0;
}