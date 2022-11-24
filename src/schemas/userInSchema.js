import joi from "joi";

export const userInSchema = joi.object({
    email: joi.string().email().required().trim(),
    password: joi.string().required()
});