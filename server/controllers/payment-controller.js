const stripe = require('stripe')('sk_test_51PJbN4SBPKOqa8UPFU0SFZCb20J5aJg6WZd7yRKsqdISqge2QCyIYigIx8c9WEUJCjnIqxYGktB4yVLR0PqB2veB00h1ozsv5p');
const { v4: uuidv4 } = require('uuid');
const { PriceParser } = require('../Helpers/PriceParser')

const payments = async (req, res) => {
    try {
        console.log("cargt from", req.body);
        const idempotency_key = uuidv4();

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
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        console.log("session id ", session.id);
        res.json({ id: session.id });
    } catch (error) {
        console.log("Error creating checkout session: ", error);
        res.status(500).json({ message: "Error from payments backend", error });
    }
};

module.exports = { payments };
