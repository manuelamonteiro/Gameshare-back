import { userChanged, passwordChanged, addressSchema } from "../schemas/profileSchema.js";

export async function userChangedValidation(req, res, next) {

    const validationStatus = userChanged.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(422).send(error);
        return;
    }

    next();
}

export async function passwordChangedValidation(req, res, next) {

    const validationStatus = passwordChanged.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(422).send(error);
        return;
    }

    next();
}

export async function addressValidation(req, res, next) {

    const validationStatus = addressSchema.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(422).send(error);
        return;
    }

    next();
}