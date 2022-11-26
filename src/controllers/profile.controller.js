import { collectionUsers, collectionAddress, collectionSessions } from "../database/db.js";

export async function postAddress(req, res) {

    const { address, city, state, cep } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        res.status(401).send({ message: "Você não está autorizado a prosseguir!" });
        return;
    };

    try {
        const session = await collectionSessions.findOne({ token });

        if (!session) {
            res.status(401).send({ message: "O usuário não está logado!" });
            return;
        };

        const user = await collectionUsers.findOne({ _id: session?.userId });

        if (!user) {
            res.status(401).send({ message: "O usuário não está cadastrado!" });
            return;
        };

        const idUser = user._id;

        await collectionAddress.insertOne({
            userId: idUser,
            address: address,
            city: city,
            state: state,
            cep: cep
        });

        res.status(200).send({ message: "Endereço adicionado com sucesso!" });
    } catch (error) {
        res.status(500).send(error);
    };

}

export async function nameChanged(req, res) {

    const { email, name } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        res.status(401).send({ message: "Você não está autorizado a prosseguir!" });
        return;
    };

    try {
        const session = await collectionSessions.findOne({ token });

        if (!session) {
            res.status(401).send({ message: "O usuário não está logado!" });
            return;
        };

        const user = await collectionUsers.findOne({ _id: session?.userId });

        if (!user) {
            res.status(401).send({ message: "O usuário não está cadastrado!" });
            return;
        };

        const idUser = user._id;

        await collectionUsers.updateOne({ _id: idUser },
            { $set: { email: email, name: name } });

        res.status(200).send({ message: "Atualização realizada com sucesso!" });
    } catch (error) {
        res.status(500).send(error);
    };

}

export async function passwordChanged(req, res) {

    const { oldPassword, newPassword, newPasswordConfirm } = req.body;

    if (newPassword === oldPassword) {
        res.status(401).send({ message: "Utilize uma senha nova!" });
        return;
    }

    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        res.status(401).send({ message: "Você não está autorizado a prosseguir!" });
        return;
    };

    try {
        const session = await collectionSessions.findOne({ token });

        if (!session) {
            res.status(401).send({ message: "O usuário não está logado!" });
            return;
        };

        const user = await collectionUsers.findOne({ _id: session?.userId });

        if (!user) {
            res.status(401).send({ message: "O usuário não está cadastrado!" });
            return;
        };

        const idUser = user._id;

        await collectionUsers.updateOne({ _id: idUser },
            { $set: { password: newPassword, passwordConfirm: newPasswordConfirm } });

        res.status(200).send({ message: "Atualização realizada com sucesso!" });
    } catch (error) {
        res.status(500).send(error);
    };
}