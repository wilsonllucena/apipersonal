import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Leaner from 'App/Models/Leaner';

export default class LeanersController {
  public async index ({response}: HttpContextContract) {
    const data = Leaner.all();
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
