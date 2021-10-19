import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Exercicie from 'App/Models/Exercicie'

export default class ExerciciesController {
  public async index ({response}: HttpContextContract) {
    const exercicies = await Exercicie.all();
    return response.json(exercicies);
  }

  public async store ({ request , response }: HttpContextContract) {
    const data = request.body();


  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
