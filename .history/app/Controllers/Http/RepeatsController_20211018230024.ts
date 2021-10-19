import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Repeat from 'App/Models/Repeat';

export default class RepeatsController {
  public async index ({response}: HttpContextContract) {
    const data = Repeat.all();
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
