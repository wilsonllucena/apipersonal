import { container } from "tsyringe";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { AuthenticateService } from "App/Services/AutenticateService";

export default class AuthenticateController {
	public async handle({ auth, request, response }: HttpContextContract) {
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
}
