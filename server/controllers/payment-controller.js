const stripe = require('stripe')(process.env.STRIPE_KEY);
const { PriceParser } = require('../Helpers/PriceParser')

const payments = async (req, res) => {
    try {

        console.log("fgdtkhdtlhkdlhkdf;g")
        const lineItems = req.body.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    images: [product.image],
                    name: product.Description,
                },
                unit_amount: PriceParser({ amount: product.SellingPrice }) * 100,
            },
            quantity: product.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            shipping_address_collection: {
                allowed_countries: ['IN'],
            },
            payment_method_types: ['card'],
            line_items: lineItems,
            shipping_options: [{
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        currency: 'inr',
                        amount: 5000
                    },
                    display_name: 'Purchase Delivery'
                },
            }],
            mode: 'payment',
            success_url: process.env.SUCCESS_URL,
            cancel_url: process.env.CANCEL_URL,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.log("Error creating checkout session: ", error);
        res.status(500).json({ message: "Error from payments backend", error });
    }
};

module.exports = { payments };
