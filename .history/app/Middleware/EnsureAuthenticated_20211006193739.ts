import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EnsureAuthenticated {
  public async handle ({auth, response }: HttpContextContract, next: () => Promise<void>) {

    try {

     await auth.use('api').authenticate();

      if (!auth.isAuthenticated) {
        throw new Error("User does not exists")
      }

      await next()

    } catch (error) {
      return response.status(error.status).json("")
    }

  }
}
