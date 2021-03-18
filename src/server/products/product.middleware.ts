import {Router, Request, Response} from "express";
import ProductDB from "../../db/init.db.json";

export const createProductMiddleware = (apiRoot: String = "/products"): Router => {
    const router = Router();

    router.get(`${apiRoot}`, (req: Request, res: Response) => {
        res.json({
            products: ProductDB
        });
    })

    router.get(`${apiRoot}/offers`, (req: Request, res: Response) => {
        const offers = [];
        for (let i = 0; i < Math.min(5, ProductDB.length); ) {
            const rnd = Math.floor(Math.random() * ProductDB.length);
            if (offers.indexOf(ProductDB[rnd]) === -1) {
                offers.push((ProductDB[rnd]));
                i++;
            }
        }
        res.json({offers});
    })

    return router;
};