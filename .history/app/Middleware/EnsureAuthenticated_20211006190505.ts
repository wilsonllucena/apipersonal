import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class EnsureAuthenticated {
  public async handle ({auth, request, response }: HttpContextContract, next: () => Promise<void>) {
    const authenticate = await auth.authenticate();

    const verify =   auth.verifyCredentials(String(authenticate.id), authenticate.password)
    const user = User.find(authenticate.id);

    console.log(user)
    await next()
  }
}
