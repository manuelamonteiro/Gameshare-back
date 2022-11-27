import { ObjectId } from "mongodb";
import { collectionProducts, collectionCategories } from "../database/db.js";

export async function insertProduct(req, res) {
  const products = req.body;

  try {
    products.forEach(async (product) => {
      const category = await collectionCategories.findOne({ name: product.category });

      if (!category) {
        res.sendStatus(422);
      }

      await collectionProducts.insertOne({ ...product, category: category._id });
    });

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getAllProducts(req, res) {
  try {
    const allProducts = await collectionCategories
      .aggregate([
        {
          $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "category",
            as: "products",
          },
        },
      ])
      .toArray();

    res.send(allProducts);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getProductById(req, res) {
  const id = req.query.id;

  if (!id) return res.sendStatus(422);

  try {
    const product = await collectionProducts.findOne({ _id: ObjectId(id) });

    if (!product) return res.sendStatus(404);

    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}
