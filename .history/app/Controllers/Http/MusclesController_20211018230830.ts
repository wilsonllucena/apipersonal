import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Muscle from 'App/Models/Muscle';

export default class MusclesController {
  public async index ({response}: HttpContextContract) {
    const data = await Muscle.all();
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
