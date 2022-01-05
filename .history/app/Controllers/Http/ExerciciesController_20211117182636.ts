import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Exercicie from 'App/Models/Exercicie'

export default class ExerciciesController {
  public async index ({response}: HttpContextContract) {
    const exercicies =  await Exercicie.query().select('*');
    return response.json(exercicies);
  }

  public async store ({ request , response }: HttpContextContract) {
    try{
      const data = request.all();
      await Exercicie.create(data);
      return response.status(200);
    }catch(erro){
      return response.status(500).json({'message': erro.message})
    }
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
