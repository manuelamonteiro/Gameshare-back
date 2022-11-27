import joi from "joi";

export const userChanged = joi.object({
    email: joi.string().email().required().trim(),
    name: joi.string().required().trim()
});

export const passwordChanged = joi.object({
    oldPassword: joi.string().required(),
    newPassword: joi.string().min(6).required(),
    newPasswordConfirm: joi.string().min(6).valid(joi.ref("newPassword")).required()
});

 export const addressSchema = joi.object({
    address: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().required(),
    cep: joi.number().required()
 });