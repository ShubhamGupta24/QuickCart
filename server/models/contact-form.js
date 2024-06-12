const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: false,
    },
});


contactSchema.pre("save", async function () {
    const form = this;
})

// create a new collections(Model) 
const Contact = new model("Contact", contactSchema);
module.exports = Contact;  