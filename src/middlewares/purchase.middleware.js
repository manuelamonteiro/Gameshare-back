import { purchaseSchema } from "../schemas/purchaseSchema.js";

export async function validatePurchase(req, res, next) {
  const validationStatus = purchaseSchema.validate(req.body, { abortEarly: false });

  if (validationStatus.error) {
    const error = validationStatus.error.details.map((detail) => detail.message);
    res.status(422).send(error);
    return;
  }

  next();
}
