import { AuthContract } from "@ioc:Adonis/Addons/Auth";
import { Exception } from "@poppinss/utils";
import { injectable } from "tsyringe";

interface IRequest {
  auth: AuthContract
}


@injectable()
class LogoutService {
  async execute({auth}: IRequest): Promise<void> {
    const isLoggedIn = await auth.use('api').isLoggedIn;
    if(!isLoggedIn){
      throw new Exception("Ops você não esta logado...", 401)
    }
    await auth.use('api').logout()
  }
}

export { LogoutService }
