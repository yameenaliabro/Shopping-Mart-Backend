import mongoose, { Schema } from "mongoose";
import { carouselProps } from "../controllers/carousel/dto";

const carouselSchema = new Schema<carouselProps>({
    heading: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    image2: { type: String, required: true },
})

export default mongoose.model<carouselProps>("carousel", carouselSchema);