import { container } from "tsyringe";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { AuthenticateService } from "App/Services/AutenticateService";
import { Exception } from "@poppinss/utils";
import { LoginService } from "App/Services/Authenticate/LoginService";

export default class AuthenticateController {
	public async login({ auth, request, response }: HttpContextContract) {
		try {
			const { username, password } = request.all();
			const loginService = container.resolve(LoginService);
			return await loginService.execute({ auth, username, password });
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
