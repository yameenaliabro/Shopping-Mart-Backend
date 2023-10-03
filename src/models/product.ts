import mongoose, { Schema } from "mongoose"
import { IProduct } from "../types"

const productSchema = new Schema<IProduct>({
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    discountPercentage: { type: Number, required: true },
    id: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
})

export default mongoose.model("product", productSchema)