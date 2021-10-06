import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { AuthenticateService } from "App/Services/AutenticateService";
import { container } from "tsyringe";

export default class AuthenticateController {
	public async login({ auth, request, response }: HttpContextContract) {

    try {
      const { email, password } = request.all();

      const autheticateService = container.resolve(AuthenticateService)

      await autheticateService.execute({auth, email, password})
    } catch (error) {
      return response.status(error.status).json({erro: 'Invalid credentials'});

    }

	}
}
