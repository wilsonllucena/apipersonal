import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Frequency from 'App/Models/Frequency'

export default class FrequenciesController {

  public async index ({response}: HttpContextContract) {
    const frequencies = Frequency.all();
    return response.json(frequencies);
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
