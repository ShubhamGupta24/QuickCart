const { z } = require("zod");

// Creating an object schema of signup/register form
const contactFormSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 characters" })
        .max(40, { message: "Name must not be more than 40 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(25, { message: "Email must not be more than 255 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .min(8, { message: "Phone must be of minimum 8 characters" })
        .max(10, { message: "Phone must be of maximum 10 characters" }),
    location: z
        .string({ message: "location is required" })
        .trim()
        .min(3, { message: "location must be at least of 3 characters" })
        .max(50, { message: "location must not be more than 50 characters" }),
    query: z
        .string({ required_error: "Message is required" })
        .trim()
        .min(5, { message: "Email must be at least of 3 characters" })

});

module.exports = contactFormSchema;