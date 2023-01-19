import {z} from 'zod';

export const createSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be string"
        }).min(2, "Title must consist of 2 or more letters")
    })
});

export const updateSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be string"
        }).min(2, "Title must consist of 2 or more letters"),
        isCompleted: z.boolean().optional()
    }),
    params: z.object({
        id: z.string({
            required_error: "id is required",
            invalid_type_error: "id must be string"
        }).uuid()
    })
});

export const deleteSchema = z.object({
    params: z.object({
        id: z.string({
            required_error: "id is required",
            invalid_type_error: "id must be string"
        }).uuid()
    })
});