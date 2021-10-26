import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Training from 'App/Models/Training';

export default class TrainingsController {
  public async index ({response}: HttpContextContract) {
    const data = await Training.all();
    return response.json(data);
  }

  public async store ({ request, response }: HttpContextContract) {
    console.log(request.body())
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
