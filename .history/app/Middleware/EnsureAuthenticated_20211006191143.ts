import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class EnsureAuthenticated {
  public async handle ({auth, request, response }: HttpContextContract, next: () => Promise<void>) {

    try {

      const authenticate = await auth.authenticate();

      // const verify =  await auth.verifyCredentials(String(authenticate.id), authenticate.password)
      const user = await User.find(authenticate.id);

      if (!user) {
        throw new Error("User does not exists")
      }

      await next()

    } catch (error) {
      return response.status(error.status).json("")
    }

  }
}
