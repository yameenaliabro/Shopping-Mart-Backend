import Joi from "joi";
import { getProduct } from "../../controllers/products";
import { ApiError, Request, Response } from "../../helpers";
import { IProduct } from "../../types";
import { wrap } from "../../wrappers";

const productSchema = {
    reqQuery: Joi.object().length(0),
    reqBody: Joi.object({
        brand: Joi.string().optional(),
    })
}
const getProductApi = async (req: Request<IProduct>, res: Response) => {
    const { brand, category, description, discountPercentage, id, price, rating, stock, thumbnail, title } = req.body
    const product = await getProduct({ brand, category, description, discountPercentage, id, price, rating, stock, thumbnail, title })
    if (!product) {
        throw new ApiError(401, "Product Not Found")
    }
    res.send(product)
}

export default wrap(getProductApi, {
    authedOnly: false,
    catch: true,
    validate: undefined
})