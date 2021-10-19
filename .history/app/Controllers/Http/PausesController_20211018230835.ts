import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pause from 'App/Models/Pause';

export default class PausesController {
  public async index ({response}: HttpContextContract) {
    const data = await Pause.all();
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
