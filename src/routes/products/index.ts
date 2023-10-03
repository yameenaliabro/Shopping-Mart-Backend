import express from "express"
import getProduct from "./get-product"

const productroutes = express()
    .use("/", getProduct)

export default productroutes;