export default function calculateTotal(purchases, applyDiscount) {
    
    const sum = purchases.reduce((total, item) => {
        return total + (item.count * item.price);
    }, 0);

    if (applyDiscount) {
        return sum * 0.51;
    }

    return sum;
}
