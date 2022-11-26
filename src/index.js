import express from "express";
import cors from "cors";
import usersRouters from "./routers/users.routes.js";
import productsRouters from "./routers/products.routes.js";
import purchasesRouters from "./routers/purchases.routes.js";
import profileRouters from "./routers/profile.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouters);
app.use(productsRouters);
app.use(purchasesRouters);
app.use(profileRouters);


app.listen(process.env.PORT, () => {
  console.log(`Server running in port: ${process.env.PORT}`);
});
