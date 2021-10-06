import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthenticateController {
	public async login({ auth, request, response }: HttpContextContract) {

    try {
      const { email, password } = request.all();

      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '1day'
      })

      const user = token.user;
      const data = {

          email: user.email

      }

      return {...token.toJSON(), data };
    } catch (error) {
      return response.status(error.status).json({erro: 'Invalid credentials'});

    }

	}
}
