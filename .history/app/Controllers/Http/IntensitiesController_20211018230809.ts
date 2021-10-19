import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Intensity from 'App/Models/Intensity';

export default class IntensitiesController {
  public async index ({response}: HttpContextContract) {
    const data = await Intensity.all();
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
