import { ObjectId } from "mongodb";
import { collectionPurchases } from "../database/db.js";

export async function insertPurchase(req, res) {
  const purchase = req.body;
  const date = new Date();
  purchase.userId = ObjectId(purchase.userId);
  purchase.date = date.toLocaleDateString();

  try {
    await collectionPurchases.insertOne(purchase);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
}
