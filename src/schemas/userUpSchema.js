import joi from "joi";

export const userUpSchema = joi.object({
    name: joi.string().min(3).required().trim(),
    email: joi.string().email().required().trim(),
    password: joi.string().min(6).required(),
    passwordConfirm: joi.string().min(6).valid(joi.ref("password")).required()
});