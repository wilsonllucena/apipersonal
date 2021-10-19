import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Week from 'App/Models/Week';

export default class WeeksController {
  public async index ({response}: HttpContextContract) {
    const data = await Week.all();
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
