import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Hash from "@ioc:Adonis/Core/Hash";
import User from "App/Models/User";

export default class AuthenticateController {
	public async login({ auth, request, response }: HttpContextContract) {
		const { email, password } = request.all();

		const token = await auth.use('api').attempt(email, password, {
      expiresIn: '1day'
    })


    const user = token.user;

		return response.json({token, user});
	}
}
