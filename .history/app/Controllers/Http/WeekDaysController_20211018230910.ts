import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import WeekDay from 'App/Models/WeekDay';

export default class WeekDaysController {
  public async index ({response}: HttpContextContract) {
    const data = await WeekDay.all();
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
