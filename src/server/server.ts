import express from "express";
import {json} from "body-parser";
import path from "path";
import {createProductMiddleware} from "./products/product.middleware";

const DEFAULT_PORT: number = 5000;
const PORT = Number(process.env.PORT) || DEFAULT_PORT;
const appDir = path.resolve(__dirname, "../ui");

const app = express();
app.use(json());

app.use(createProductMiddleware());
app.use("/", express.static(appDir));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
})