import express from "express";
import authrouter from "./auth";
import carouselroutes from "./carousel";
import productroutes from "./products";

const routes = express()
    .use('/auth', authrouter)
    .use("/carousel", carouselroutes)
    .use("/products", productroutes)

export default routes;