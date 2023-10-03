import { login } from "../../controllers/auth";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import Joi from "joi"

interface loginUser {
    username: string;
    password: string;
}

const loginSchema = {
    reqQuery: Joi.object().length(0),
    reqBody: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    })
}

const loginApi = async (req: Request<loginUser>, res: Response) => {
    const { password, username } = req.body
    const loginUser = await login({ password, username })
    res.send(loginUser)
}

export default wrap(loginApi, {
    authedOnly: false,
    catch: true,
    validate: loginSchema

})