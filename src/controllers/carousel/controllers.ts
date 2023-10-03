import { ApiError } from "../../helpers";
import { Carousel } from "../../models";
import { carouselProps } from "./dto";

export const getCarousel = async (props: carouselProps) => {
    // const { heading } = props
    const carousel = await Carousel.find()
    if (!carousel) {
        throw new ApiError(401, "carousel data not found")
    }
    return { sucess: true, carousel }
}