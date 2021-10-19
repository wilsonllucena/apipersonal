import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Serie from 'App/Models/Serie';

export default class SeriesController {
  public async index ({response}: HttpContextContract) {
    const data = Serie.all();
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
