import { collectionUsers } from "../database/db.js";
import { userUpSchema } from "../schemas/userUpSchema.js";

export async function userSignUp(req, res, next) {

    const user = req.body;

    try {
        const userExists = await collectionUsers.findOne({ email: user.email });

        if (userExists) {
            res.status(409).send({ message: "Esse e-mail já está cadastrado!" });
            return;
        }

        const validationStatus = userUpSchema.validate(req.body, { abortEarly: false });

        if (validationStatus.error) {
            const error = validationStatus.error.details.map((detail) => detail.message);
            res.status(422).send(error);
            return;
        }
    } catch (error) {
        res.status(500).send(error);
    }

    next();

}