import { AuthContract } from "@ioc:Adonis/Addons/Auth";
import { injectable } from "tsyringe";

interface IRequest {
  auth: AuthContract
  username: string;
  password: string;
}

interface IResponse {
  user: {
    email: string;
  },
  token: string
}

@injectable()
class AuthenticateService {
  async execute({auth, username , password}: IRequest): Promise<IResponse> {
    const token = await auth.use('api').attempt(username, password, {
      expiresIn: '1day'
    })

    const data =  token.user;
    const user = {
        email: data.email
    }

    return {...token.toJSON(), user };
  }
}

export { AuthenticateService }
