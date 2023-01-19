import {z} from 'zod';

export const registrationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be string"
        }).min(2, "Name must consist of 2 or more letters"),
        email: z.string({
            required_error: "Email is required",
            invalid_type_error: "Email must be string"
        }).email("Please, insert the correct email format"),
        password: z.string({
            required_error: "Password is required",
            invalid_type_error: "Password must be string"
        }).min(8, "Your pasword must be at least 8 characters")
    })
});