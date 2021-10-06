import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Exception } from '@poppinss/utils';

export default class EnsureAuthenticated {
  public async handle ({auth, response }: HttpContextContract, next: () => Promise<void>) {

    try {

     await auth.use('api').authenticate();

      if (!auth.isAuthenticated) {
        throw new Exception("User does not exists", 404)
      }

      await next()

    } catch (error) {
      return response.status(error.status).json("")
    }

  }
}
