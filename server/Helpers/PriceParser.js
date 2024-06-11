const PriceParser = ({ amount }) => {
    let price = '';
    console.log(amount)
    price = amount.replace(/[₹,]/g, '');

    return (parseInt(price, 10)); // Specify the radix as 10 for decimal numbers
}

module.exports = { PriceParser }
