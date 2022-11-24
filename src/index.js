import express from "express";
import cors from "cors";
import usersRouters from "./routers/users.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouters);

app.listen(process.env.PORT, () => {
    console.log(`Server running in port: ${process.env.PORT}`);
});