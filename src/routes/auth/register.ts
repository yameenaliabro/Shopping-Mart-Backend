import { register } from "../../controllers/auth";
import { ApiError, Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import Joi from "joi"

interface registerprops {
    username: string,
    email: string,
    dob: number,
    phonNumber: number,
    password: string
}

const loginSchema = {
    reqQuery: Joi.object().length(0),
    reqBody: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        phonNumber: Joi.string().required(),
        dob: Joi.string().required(),
        email: Joi.string().required()
    })
}
const registerApi = async (req: Request<registerprops>, res: Response) => {
    const { dob, email, password, phonNumber, username } = req.body
    const user = await register({ dob, email, password, phonNumber, username })
    res.send(user)
}

export default wrap(registerApi, {
    authedOnly: false,
    catch: true,
    validate: loginSchema
})