import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypeTraining from 'App/Models/TypeTraining';

export default class TypeTrainingsController {
  public async index ({response}: HttpContextContract) {
    const data = TypeTraining.all();
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
