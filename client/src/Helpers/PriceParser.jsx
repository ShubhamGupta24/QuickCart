const PriceParser = ({ amount, quantity }) => {
    let price = '';

    for (let i = 0; i < amount.length; i++) {
        let ch = amount.charAt(i);
        if (ch !== ',' && ch !== '₹')
            price += ch;
    }

    return (Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(parseInt(price, 10) * quantity)).toString(); // Specify the radix as 10 for decimal numbers
}

export default PriceParser;
