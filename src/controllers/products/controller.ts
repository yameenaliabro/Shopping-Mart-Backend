import { ApiError } from "../../helpers";
import { IProduct } from "../../models";
import { getproduct } from "./dto";

export const getProduct = async (prop: getproduct) => {
    const product = await IProduct.find();
    if (!product) {
        throw new ApiError(401, "Product Not Found")
    }
    return { sucess: true, product }
}   

