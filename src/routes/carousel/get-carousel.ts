import { getCarousel } from "../../controllers/carousel";
import { ApiError, Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

interface carouselData {
    image: string,
    title: string,
    heading: string
    image2: string,
}

const getCarouselApi = async (req: Request<carouselData>, res: Response) => {
    const { heading, image, title, image2 } = req.body
    const carousel = await getCarousel({ heading, image, title, image2 })
    if (!carousel) {
        throw new ApiError(401, "Carousel data not found!");
    }

    res.send(carousel)
}

export default wrap(getCarouselApi, {
    authedOnly: false,
    catch: true,
    validate: undefined
})