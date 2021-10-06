import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class EnsureAuthenticated {
  public async handle ({auth, request, response }: HttpContextContract, next: () => Promise<void>) {

    try {

     await auth.logout();

      if (auth.isAuthenticated) {
        throw new Error("User does not exists")
      }

      await next()

    } catch (error) {
      return response.status(error.status).json("")
    }

  }
}
