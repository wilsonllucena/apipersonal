import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EnsureAuthenticated {
  public async handle ({request, response }: HttpContextContract, next: () => Promise<void>) {
    const authHeader = request.ctx?.auth;

    await next()
  }
}
