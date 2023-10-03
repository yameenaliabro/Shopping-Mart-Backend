import express from "express";
import getCarousel from "./get-carousel";

const carouselroutes = express()
    .use("/", getCarousel)

export default carouselroutes