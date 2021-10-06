import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthenticateController {
	public async login({ auth, request, response }: HttpContextContract) {

    try {
      const { email, password } = request.all();

      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '1day'
      })

      const user = token.user;

      return {...token.toJSON(), user};
    } catch (error) {
      return response.json('Autenticação falhou');

    }

	}
}
