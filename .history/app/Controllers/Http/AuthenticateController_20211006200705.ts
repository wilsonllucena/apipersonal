import { container } from "tsyringe";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { LoginService } from "App/Services/Authenticate/LoginService";
import { LogoutService } from "App/Services/Authenticate/LogoutService";

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
      const logoutService = container.resolve(LogoutService);
      await logoutService.execute({auth})
			return response.send("");
		} catch (error) {
			return response
				.status(error.status)
				.send("");
		}
	}
}
