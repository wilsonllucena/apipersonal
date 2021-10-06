import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EnsureAuthenticated {
  public async handle ({auth, request, response }: HttpContextContract, next: () => Promise<void>) {
    const authHeader = auth.authenticate;

    console.log(authHeader)
    await next()
  }
}
