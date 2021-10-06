import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Hash from "@ioc:Adonis/Core/Hash";
import User from "App/Models/User";

export default class AuthenticateController {
	public async login({ auth, request, response }: HttpContextContract) {
		const { email, password } = request.all();

		const user = await User.query()
			.where("email", email)
			.whereNull("is_deleted")
			.firstOrFail();

		if (!(await Hash.verify(user.password, password))) {
			return response.badRequest("Invalid credentials");
		}

		// Generate token
		const token = await auth.use("api").generate(user);

		return response.json(token);
	}
}
