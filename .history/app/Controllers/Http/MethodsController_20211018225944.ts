import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Method from 'App/Models/Method';

export default class MethodsController {
  public async index ({response}: HttpContextContract) {
    const data = Method.all();
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
