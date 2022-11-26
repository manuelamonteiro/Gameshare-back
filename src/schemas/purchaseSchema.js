import joi from "joi";

export const purchaseSchema = joi.object({
  products: joi.array().items(joi.string()),
  priceByDay: joi.number(),
});
