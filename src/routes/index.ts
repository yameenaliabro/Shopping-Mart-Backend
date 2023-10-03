import express from "express";
import authrouter from "./auth";
import carouselroutes from "./carousel";

const routes = express()
    .use('/auth', authrouter)
    .use("/carousel", carouselroutes)

export default routes;