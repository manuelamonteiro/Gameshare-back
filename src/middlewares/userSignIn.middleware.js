import { userInSchema } from "../schemas/userInSchema.js";

export async function userSignIn (req, res, next) {

        const validationStatus = userInSchema.validate(req.body, { abortEarly: false });

        if (validationStatus.error) {
            const error = validationStatus.error.details.map((detail) => detail.message);
            res.status(422).send(error);
            return;
        }

    next();
}