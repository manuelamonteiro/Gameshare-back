import joi from "joi";

export const purchaseSchema = joi.object({
  userId: joi.string().required(),
  products: joi.array().items(joi.string()),
  priceByDay: joi.number(),
});
