import { ObjectId } from "mongodb";
import { collectionPurchases } from "../database/db.js";

export async function insertPurchase(req, res) {
  const { products, priceByDay } = req.body;
  const { userId } = res.locals.user;

  const date = new Date();
  const todayDate = date.toLocaleDateString();

  const id = ObjectId(userId);
  const productsId = products.map((p) => ObjectId(p));

  const purchase = {
    userId: id,
    date: todayDate,
    products: productsId,
    priceByDay,
  };

  try {
    await collectionPurchases.insertOne(purchase);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
}
