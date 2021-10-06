import { container } from "tsyringe";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { AuthenticateService } from "App/Services/AutenticateService";
import { Exception } from "@poppinss/utils";

export default class AuthenticateController {
	public async login({ auth, request, response }: HttpContextContract) {
		try {
			const { username, password } = request.all();
			const autheticateService = container.resolve(AuthenticateService);
			return await autheticateService.execute({ auth, username, password });
		} catch (error) {
			return response
				.status(error.status)
				.json({ erro: "Invalid credentials" });
		}
	}

  public async logout({ auth, response }: HttpContextContract) {
		try {
      const isLoggedIn = await auth.use('api').isLoggedIn;
      if(!isLoggedIn){
        throw new Exception("Ops você não esta logado...", 401)
      }
      await auth.use('api').logout()

			return response.send("");
		} catch (error) {
			return response
				.status(error.status)
				.send("");
		}
	}
}
