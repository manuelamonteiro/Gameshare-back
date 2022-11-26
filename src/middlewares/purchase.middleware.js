import { purchaseSchema } from "../schemas/purchaseSchema.js";
import { collectionSessions } from "../database/db.js";

export async function validatePurchase(req, res, next) {
  const validationStatus = purchaseSchema.validate(req.body, { abortEarly: false });

  if (validationStatus.error) {
    const error = validationStatus.error.details.map((detail) => detail.message);
    res.status(422).send(error);
    return;
  }

  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  const user = await collectionSessions.findOne({ token });

  if (!user) {
    res.sendStatus(401);
    return;
  }

  res.locals.user = user;
  next();
}
