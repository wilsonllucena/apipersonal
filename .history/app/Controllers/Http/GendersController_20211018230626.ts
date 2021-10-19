import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Gender from 'App/Models/Gender'

export default class GendersController {
  public async index ({response}: HttpContextContract) {
    const genders = Gender.find();
    return response.json({genders});
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
