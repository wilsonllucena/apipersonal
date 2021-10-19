import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Weight from 'App/Models/Weight';

export default class WeightsController {
  public async index ({response}: HttpContextContract) {
    const data = await Weight.all();
    return response.json(data);
  }
  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
